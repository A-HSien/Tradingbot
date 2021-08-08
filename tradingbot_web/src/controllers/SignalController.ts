import { TokenServiceBindings } from "../auth";
import { inject } from "@loopback/core";
import { HttpErrors, get, post, requestBody } from "@loopback/rest";
import { JWTService } from "../auth";
import SignalRepo from "../repositories/SignalRepo";
import _ from "lodash";
import { authenticate } from "@loopback/authentication";
import { SecurityBindings, UserProfile } from '@loopback/security';
import { actions, ActionKey } from "../common/binanceApi/Actions";
import AccountRepo from "../repositories/AccountRepo";
import { Account } from "../domains/Account";
import ActionRecordRepo from "../repositories/ActionRecordRepo";
import { ActionRecord } from "../domains/Action";
import { Signal } from "../domains/Signal";
import { getFuturePrice } from "../common/binanceApi/FuturePrice";
import { updateAccount } from "../common/binanceApi/AccountSnapshot";
import { getAllSymbol, updateExchangeInfo } from "../common/binanceApi/ExchangeInfo";



export class SignalController {

  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE) private tokenSvc: JWTService,
  ) { };


  @authenticate('jwt')
  @get('signal/history')
  async history(
    @inject(SecurityBindings.USER) currentUser: UserProfile,

  ) {
    const data = await SignalRepo.where({ userId: currentUser.id });
    return data.reverse();
  };


  @authenticate('jwt')
  @get('signal/getToken')
  async getToken(
    @inject(SecurityBindings.USER) currentUser: UserProfile,

  ) {
    return this.tokenSvc.generateTokenForSignal(currentUser.id);
  };

  
  @authenticate('jwt')
  @get('signal/getAllSymbol')
  async getAllSymbol(

  ) {
    return getAllSymbol();
  };


  @get('signal/actions')
  getActionList() {
    return Object.keys(actions).map(key => {
      const action = actions[key as ActionKey];
      const model = {
        ...action,
        action: key,
      };
      return model;
    });
  };


  @post('signal/trading')
  async trading(
    @requestBody() data: Signal

  ) {
    console.log('signal/trading payload:', data);
    const tokenData = await this.tokenSvc.decodedToken(data.token);
    console.log('signal/trading tokenData:', tokenData);

    // validation
    ['userId'].forEach(field => {
      if (!tokenData[field])
        throw new HttpErrors.Unauthorized(
          `Error verifying token : ${field} is required`
        );
    });


    const signal: Signal = {
      ...(_.omit(data, 'token') as Signal),
      userId: tokenData.userId,
    };
    const actionKey = signal.action;
    const action = actions[actionKey];
    if (!action) {
      const error = 'action not found';
      signal.error = error;
      console.warn(error, signal);
      await SignalRepo.create(signal);
    }
    if (!action) return;


    const [price] = await Promise.all([
      getFuturePrice(signal.symbol),
      updateExchangeInfo(),
    ]);
    if (!price || !price.price) {
      console.error("get price error", signal);
      await SignalRepo.create(signal);
      return;
    }
    console.log('price', price);
    signal.currentPrice = Number(price.price);
    signal.quantity = Number(signal.quantity) / Number(signal.currentPrice);
    await SignalRepo.create(signal);


    const query: Partial<Account> = { ownerId: signal.userId, disabled: false };
    const accounts = await AccountRepo.where(query);

    const logs = await Promise.all(
      accounts.map(async acc => {
        const log: any = {};
        const updated = await updateAccount(acc)
        log.before = updated;

        const result = await action.action(actionKey, updated, signal);
        log.actionResult = result;
        await ActionRecordRepo.create(result);
        return log;
      })
    );
    const cloneLogs = JSON.parse(JSON.stringify(logs))
      .map((each: any) => {
        if (each && each.before) {
          each.before.apiKey = 'apiKey';
          each.before.apiSecret = 'apiSecret';
        }
        return each;
      });
    console.log('logs:', cloneLogs);

  };
};
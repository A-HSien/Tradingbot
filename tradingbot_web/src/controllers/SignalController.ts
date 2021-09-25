import { inject, intercept } from "@loopback/core";
import { get, post, requestBody } from "@loopback/rest";
import SignalRepo from "../repositories/SignalRepo";
import _ from "lodash";
import { authenticate } from "@loopback/authentication";
import { SecurityBindings, UserProfile } from '@loopback/security';
import { actions, ActionKey } from "../common/binanceApi/Actions";
import { fetchAccountsByUser } from "../repositories/AccountRepo";
import { Account } from "../domains/Account";
import ActionRecordRepo from "../repositories/ActionRecordRepo";
import { decodeSignal, Signal } from "../domains/Signal";
import { getFuturePrice } from "../common/binanceApi/FuturePrice";
import { queryAccountBalance } from "../common/binanceApi/AccountSnapshot";
import { getAllSymbol, updateExchangeInfo } from "../common/binanceApi/ExchangeInfo";
import { signToken, TokenType } from "../domains/Token";
import { ActionRecord } from "../domains/Action";
import { clone } from "../domains/utilities";
import { PerformanceLog } from "../Interceptors";


export class SignalController {


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
  getToken(
    @inject(SecurityBindings.USER) currentUser: UserProfile,

  ) {
    const payload = {
      userId: currentUser.id,
      email: currentUser.email || '',
    };
    return signToken(payload, TokenType.signal, 88 * 24 * 60 * 60);
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


  @intercept(PerformanceLog)
  @post('signal/trading')
  async trading(
    @requestBody() data: Signal

  ) {
    const signal = await decodeSignal(data);
    const actionKey = signal.action;
    const action = actions[actionKey];
    if (!action) {
      const error = 'action not found';
      signal.error = error;
      console.warn(error, signal);
      await SignalRepo.create(signal);
    }
    if (!action) return;


    const [priceInfo] = await Promise.all([
      getFuturePrice(signal.symbol),
      updateExchangeInfo(),
    ]);
    if (!priceInfo || !priceInfo.price) {
      console.error(`get price failed`, signal);
      await SignalRepo.create(signal);
      return;
    }
    console.log(`priceInfo - ${priceInfo.symbol}: ${priceInfo.price}`, priceInfo);
    signal.currentPrice = Number(priceInfo.price);
    signal.quantity = Number(signal.quantity) / signal.currentPrice;
    SignalRepo.create(signal).then();


    const conditions: Partial<Account>[] = [{ disabled: false }];
    if (signal.groupName) conditions.push({ groupName: signal.groupName });
    const queryAccount = fetchAccountsByUser(signal.userId, signal.email).and(conditions);
    const accounts = await queryAccount.exec();

    const logs = await Promise.all(
      accounts.map(async acc => {
        const updated = await queryAccountBalance(acc);
        const before = clone(updated);
        const result: ActionRecord = !before.error ?
          await action.action(actionKey, updated, signal) :
          {
            userId: signal.userId,
            accountId: acc.id,
            action: actionKey,
            result: 'action skiped -' + updated.error,
            success: false
          };
        return { before, result };
      })
    );
    await ActionRecordRepo.insertMany(logs.map(e => e.result));
    logs.forEach((each, i) => {
      each.before.apiKey = 'apiKey';
      each.before.apiSecret = 'apiSecret';
      console.log(
        `signal trading log ${i} -
        ${each.before.name} 
        success:${each.result.success}`,
        each
      );
    });

  };
};
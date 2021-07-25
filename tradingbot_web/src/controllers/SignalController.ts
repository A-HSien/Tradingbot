import { TokenServiceBindings } from "../auth";
import { inject } from "@loopback/core";
import { HttpErrors, get, post, requestBody } from "@loopback/rest";
import { JWTService } from "../auth";
import SignalRepo from "../repositories/SignalRepo";
import _ from "lodash";
import { authenticate } from "@loopback/authentication";
import { SecurityBindings, UserProfile } from '@loopback/security';
import { actions, ActionKey } from "../common/binanceApi";
import AccountRepo from "../repositories/AccountRepo";
import { Account } from "../domains/Account";
import ActionRecordRepo from "../repositories/ActionRecordRepo";
import { ActionRecord } from "../domains/Action";
import { Signal } from "../domains/Signal";



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
    return data;
  };


  @authenticate('jwt')
  @get('signal/getToken')
  async getToken(
    @inject(SecurityBindings.USER) currentUser: UserProfile,

  ) {
    return this.tokenSvc.generateTokenForSignal(currentUser.id);
  };


  @post('signal/trading')
  async trading(
    @requestBody() data: {
      token: string,
      action: ActionKey,
    },

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

    const signal:Signal = {
      ..._.omit(data, 'token'),
      userId: tokenData.userId
    };
    await SignalRepo.create(signal);

    
    const task = actions[signal.action];
    if (!task) return;

    const query: Partial<Account> = { ownerId: signal.userId, disabled: false };
    const accounts = await AccountRepo.where(query);
    const results = await Promise.all(
      accounts.map(acc => task(acc).then(result => {
        ActionRecordRepo.create(result);
        return result;
      }))
    );
    console.log('action results:', results);
    const query2: Partial<ActionRecord> = {
      userId: signal.userId
    };
    const rec = ActionRecordRepo.where(query2);
    console.log('action rec:', rec);
  };
};
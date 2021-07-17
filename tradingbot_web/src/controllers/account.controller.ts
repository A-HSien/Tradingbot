import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import {
  Request,
  RestBindings,
  get,
  post,
  requestBody,
} from '@loopback/rest';
import Binance from 'binance-api-node';
import { Account, AccountSecrets, mockAccounts } from '../models/Account';



@authenticate('jwt')
export class AccountController {


  constructor(
  ) { };


  @get('/accounts/all')
  async all() {
    const infos = await Promise.all(
      mockAccounts.map(account => this.getAccountInfo(account))
    );
    return infos;
  };


  @post('/accounts/save')
  async save(
    @requestBody() account: Account,
  ) {
    if (!account.id) {
      const accInfo = await this.getAccountInfo(account);
      if (accInfo.error) throw Error(accInfo.error);
    }


  };


  private getAccountInfo(account: Account) {

    const client = Binance({
      apiKey: account.apiKey,
      apiSecret: account.apiSecret
    });
    return client.accountInfo()
      .then(info => {
        account.balances = info.balances;
        return account;
      })
      .catch(err => {
        console.error('getAccountInfo error:', err);
        account.error = err.toString();
        return account;
      });
  }
}

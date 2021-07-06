import { inject } from '@loopback/core';
import {
  Request,
  RestBindings,
  get,
  post,
  requestBody,
} from '@loopback/rest';
import Binance from 'binance-api-node';
import { Account, accounts } from '../models/Account';



export class AccountController {


  constructor(
    @inject(RestBindings.Http.REQUEST) private req: Request
  ) { };

  @get('/account/all')
  async all() {
    const infos = await Promise.all(
      accounts
        .map(account => {
          const client = Binance(account);
          return client.accountInfo();
        })
        .map(task =>
          task.catch(err => {
            console.error(err);
            return { error: err.toString() };
          })
        )
    );
    return infos;
  };

  @post('/account/add')
  add(
    @requestBody() account: Account,
  ) {
    console.log(account);
  };


  @post('/account/update')
  update(
    @requestBody() account: Account,
  ) {
    console.log(account);
  };
}

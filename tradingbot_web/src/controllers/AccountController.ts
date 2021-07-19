import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import {
  get, post,
  requestBody,
} from '@loopback/rest';
import { SecurityBindings, securityId, UserProfile } from '@loopback/security';
import { Account } from '../domains/Account';
import AccountRepo from '../repositories/AccountRepo';
import { updateAccountInfo } from '../common/Binance';



@authenticate('jwt')
export class AccountController {


  constructor(
  ) { };


  @get('/accounts/all')
  async all(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,

  ) {
    const userId = currentUserProfile[securityId];

    const accounts: Account[] = await AccountRepo.where({
      'ownerId': userId
    });

    const infos = await Promise.all(
      accounts.map(account => updateAccountInfo(account))
    );
    return infos;
  };


  @post('/accounts/save')
  async save(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,
    @requestBody() account: Account,

  ) {
    console.log('/accounts/save', account);
    account.ownerId = currentUserProfile[securityId];

    if (account.id) {

      const before: Account = await AccountRepo.findById(account.id);
      if (!before) account.id = '';
      else {
        account = {
          ...account,
          apiKey: before.apiKey,
          apiSecret: before.apiSecret,
        }
      }
    }

    account = await updateAccountInfo(account);
    if (account.error) throw Error(account.error);

    !account.id ?
      await AccountRepo.create(account) :
      await AccountRepo.updateOne(account);
  };



};

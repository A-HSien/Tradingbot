import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import { get, post, requestBody } from '@loopback/rest';
import { SecurityBindings, securityId, UserProfile } from '@loopback/security';
import _ from 'lodash';
import { updateAccountInfo } from '../common/binanceApi/AccountSnapshot';
import { Account } from '../domains/Account';
import AccountRepo from '../repositories/AccountRepo';



@authenticate('jwt')
export class AccountController {


  @get('/accounts/all')
  async all(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,

  ) {
    const userId = currentUserProfile[securityId];
    const accounts: Account[] = await AccountRepo.where(
      { ownerId: userId }
    );
    const infos = await Promise.all(
      accounts.map(account => updateAccountInfo(account))
    );
    return infos.map(info => {
      info.apiKey = 'apiKey';
      info.apiSecret = 'apiSecret';
      return info;
    });
  };


  @post('/accounts/save')
  async save(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,
    @requestBody() account: Account,

  ) {
    account.ownerId = currentUserProfile[securityId];

    if (account.id) {

      const before = await AccountRepo.findById(account.id);
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

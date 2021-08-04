import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import { get, param, post, requestBody } from '@loopback/rest';
import { SecurityBindings, securityId, UserProfile } from '@loopback/security';
import _ from 'lodash';
import { checkAndUpdateAccount, updateAccount } from '../common/binanceApi/AccountSnapshot';
import { Account } from '../domains/Account';
import { ActionRecord } from '../domains/Action';
import AccountRepo from '../repositories/AccountRepo';
import ActionRecordRepo from '../repositories/ActionRecordRepo';



@authenticate('jwt')
export class AccountController {


  @get('/account/all')
  async all(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,

  ) {
    const userId = currentUserProfile[securityId];
    const accounts: Account[] = await AccountRepo.where(
      { ownerId: userId }
    );
    const expireTime = 3 * 60 * 1000; // 3 mins
    const now = Date.now();
    const infos = await Promise.all(
      accounts.map(account => {
        if (account.disabled ||
          (
            account.balancesLastUpdateTime &&
            ((now - account.balancesLastUpdateTime!.valueOf()) < expireTime)
          )
        )
          return Promise.resolve(account);
        else
          return updateAccount(account).then(async updated => {
            await AccountRepo.updateOne({ '_id': updated.id }, updated).exec();
            return updated;
          });
      })
    );

    return infos.map(info => {
      info.apiKey = 'apiKey';
      info.apiSecret = 'apiSecret';
      return info;
    });
  };


  @post('/account/save')
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

    account = await checkAndUpdateAccount(account);
    if (account.error && !account.disabled) return account.error;

    !account.id ?
      await AccountRepo.create(account) :
      await AccountRepo.updateOne({ '_id': account.id }, account).exec();

    return '';
  };


  @get('/account/records')
  async getRecords(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,
    @param.query.string('name') name: string,

  ) {
    const userId = currentUserProfile[securityId];

    const queryAccount: Partial<Account> = {
      ownerId: userId, name
    };
    const account = await AccountRepo.findOne(queryAccount);
    if (!account) throw new Error('account not found');

    const query: Partial<ActionRecord> = {
      userId, accountId: account.id!
    };
    return (await ActionRecordRepo.where(query)).reverse();
  };



};

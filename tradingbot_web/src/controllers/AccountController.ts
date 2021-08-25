import { authenticate } from '@loopback/authentication';
import { inject, intercept } from '@loopback/core';
import { get, param, post, requestBody } from '@loopback/rest';
import { SecurityBindings, UserProfile } from '@loopback/security';
import _ from 'lodash';
import AccountSetup from '../common/binanceApi/AccountSetup';
import { checkAndUpdateAccount, updateAccount } from '../common/binanceApi/AccountSnapshot';
import { encrypt } from '../common/GoogleKms';
import { Account, validateOwnership } from '../domains/Account';
import { ActionRecord } from '../domains/Action';
import { AppUser } from '../domains/AppUser';
import { omit } from '../domains/utilities';
import { PerformanceLog } from '../Interceptors';
import AccountRepo, { fetchAccountsByUserProfile, getAuthorizedAccount } from '../repositories/AccountRepo';
import ActionRecordRepo from '../repositories/ActionRecordRepo';
import AppUserRepo from '../repositories/AppUserRepo';


@authenticate('jwt')
export class AccountController {


  @get('/account/all')
  async all(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,

  ) {
    const accounts: Account[] = await fetchAccountsByUserProfile(currentUserProfile);
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

    if (account.id) {

      const before = await AccountRepo.findById(account.id);
      if (!before) {
        // don't do any other things here, 
        // handle new account in "if (!account.id)" instead.
        account.id = '';
      }
      else {
        validateOwnership(before, currentUserProfile);
        const removedProtectedFields = omit(
          account,
          'ownerId', 'delegateUserEmail', 'apiKey', 'apiSecret'
        );
        account = {
          ...removedProtectedFields,
          ...before
        };
      }
    }

    if (!account.id) {
      account.ownerId = currentUserProfile.id;
      account.apiSecret = await encrypt(account.apiSecret);
    }


    account = await checkAndUpdateAccount(account);
    if (account.error && !account.disabled) return account.error;

    !account.id ?
      await AccountRepo.create(account) :
      await AccountRepo.updateOne({ '_id': account.id }, account).exec();

    return '';
  };



  @post('/account/updateOwnership')
  async updateOwnership(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,
    @requestBody() payload: {
      accountId: string,
      userEmail: string,
      action: 'changeOwner' | 'delegate'
    },

  ) {
    const { accountId, userEmail, action } = payload;
    const query: Partial<AppUser> = { email: userEmail };
    const to = await AppUserRepo.findOne(query);
    if (!to) {
      const msg = 'updateOwnership - User not found';
      console.error(msg, userEmail);
      throw Error(msg);
    }

    const account = await getAuthorizedAccount(accountId, currentUserProfile);
    if (action === 'changeOwner') {
      account.ownerId = to.id;
    }
    else if (action === 'delegate') {
      account.delegateUserEmail = to.email;
    }
    else {
      const msg = 'updateOwnership - action not support';
      console.error(msg, { accountId, userId: currentUserProfile.id, msg, action });
      throw Error(msg);
    }
    return await AccountRepo.updateOne({ '_id': account.id }, account).exec();
  };


  @post('/account/setup')
  @intercept(PerformanceLog)
  async setup(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,
    @requestBody() payload: {
      accountId: string,
      action: keyof typeof AccountSetup,
      leverage?: number
    },

  ) {
    const { accountId, action, leverage } = payload;

    const account = await getAuthorizedAccount(accountId, currentUserProfile);
    if (action === 'setLeverage') {
      return await AccountSetup.setLeverage(account, leverage || 2);
    }
    else if (action === 'setMarginType') {
      return await AccountSetup.setMarginType(account);
    }
    else if (action === 'setPositionSide') {
      return await AccountSetup.setPositionSide(account);
    }
    else {
      const msg = '/account/setup - action not support';
      console.error(msg, { accountId, userId: currentUserProfile.id, msg, action });
      throw Error(msg);
    }
  };


  @get('/account/records')
  async getRecords(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,
    @param.query.string('id') id: string,

  ) {
    const account = await getAuthorizedAccount(id, currentUserProfile);
    const query: Partial<ActionRecord> = {
      accountId: account.id
    };
    return (await ActionRecordRepo.where(query)).reverse();
  };



};

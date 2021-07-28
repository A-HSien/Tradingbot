import { Account } from "../../domains/Account";
import { FutureApiBase } from "./common";
import { qurtyFutureAccountBalance } from "./FutureAccountBalance";
import { signedGet } from "./HttpMethods";


// 查詢持倉模式
const api = FutureApiBase + '/fapi/v1/positionSide/dual';
const response = {
   "dualSidePosition": true // "true": 双向持仓模式；"false": 单向持仓模式
};
type ResponseType = typeof response;



const apiError = (account: Account, err: any) => {
   console.error('Binance api error', err.response.data);
   const { code, msg } = err.response.data;
   account.error = `${msg}(${code})`;
};

export const checkAndUpdateAccount = async (account: Account) => {

   account.error = '';
   const data = await signedGet<ResponseType>(
      api, new URLSearchParams(), account.apiKey, account.apiSecret
   )
      .then(resp => resp.data)
      .catch(err => apiError(account, err));
   if (account.error) return account;

   if (!data || data.dualSidePosition === true) {
      account.error = '請調整帳戶為[單向持倉模式]';
      return account;
   }
   return updateAccount(account);
};

export const updateAccount = async (account: Account) => {

   account.error = '';
   const balance = await qurtyFutureAccountBalance(account)
      .then(resp => resp.data)
      .catch(err => apiError(account, err));
   if (account.error) return account;


   account.balances = {
      availableBalance: balance?.availableBalance || '',
      positions: balance?.positions?.filter(pos => Number(pos.positionAmt) !== 0) || []
   };
   account.balancesLastUpdateTime = new Date();

   return account;
};



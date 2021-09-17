import { Account } from "../../domains/Account";
import { FutureApiBase, logApiError } from "./common";
import { queryFutureAccountBalance } from "./FutureAccountBalance";
import { signedGet } from "./HttpMethods";


// 查詢持倉模式
const api = FutureApiBase + '/fapi/v1/positionSide/dual';
const response = {
   "dualSidePosition": true // "true": 双向持仓模式；"false": 单向持仓模式
};
type ResponseType = typeof response;


export const checkAndQueryAccount = async (account: Account) => {

   account.error = '';
   const data = await signedGet<ResponseType>(
      api, new URLSearchParams(), account.apiKey, account.apiSecret
   )
      .then(resp => resp.data)
      .catch(err => { account.error = logApiError(account, err) });
   if (account.error) return account;

   if (!data || data.dualSidePosition === true) {
      account.error = '請調整帳戶為[單向持倉模式]';
      return account;
   }
   return queryAccountBalance(account);
};

export const queryAccountBalance = async (account: Account) => {

   account.error = '';
   const balance = await queryFutureAccountBalance(account)
      .then(resp => resp.data)
      .catch(err => { account.error = logApiError(account, err) });
   if (account.error) return account;

   account.balances = {
      availableBalance: balance?.availableBalance || '',
      totalUnrealizedProfit: balance?.totalUnrealizedProfit || '',
      positions: balance?.positions?.filter(pos => Number(pos.positionAmt) !== 0) || []
   };
   account.balancesLastUpdateTime = new Date();

   return account;
};



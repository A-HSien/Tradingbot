import axios from "axios";
import { Account } from "../../domains/Account";
import { baseUrl, createSignature } from "./common";


const response = {
   "code": 200, // 200表示返回正确，否则即为错误码
   "msg": "", // 与错误码对应的报错信息
   "snapshotVos": [
      {
         "data": {
            "balances": [
               {
                  "asset": "BTC",
                  "free": "0.09905021",
                  "locked": "0.00000000"
               },
               {
                  "asset": "USDT",
                  "free": "1.89109409",
                  "locked": "0.00000000"
               }
            ],
            "totalAssetOfBtc": "0.09942700"
         },
         "type": "spot",
         "updateTime": 1576281599000
      }
   ]
};
type AccountSnapshot = typeof response;

const api = '/sapi/v1/accountSnapshot';

export const updateAccountInfo = async (account: Account) => {

   const params = new URLSearchParams({
      type: 'SPOT',
      timestamp: Date.now().toString()
   });
   const signature = createSignature(
      account.apiSecret,
      params.toString()
   );
   params.append('signature', signature);

   const data = await axios.get<AccountSnapshot>(baseUrl + api, {
      headers: { 'X-MBX-APIKEY': account.apiKey },
      params
   })
      .then(resp => resp.data)
      .catch(err => console.error('Binance api error', err.response.data));

   if (!data) {
      account.error = '查詢失敗';
      return account;
   }

   account.error = '';

   data.snapshotVos.length > 1 &&
      console.warn('snapshotVos over than one', data.snapshotVos);


   const info = data.snapshotVos[0];

   if (!info) {
      account.balances = [];
      return account;
   }

   account.balancesLastUpdateTime = new Date(info.updateTime);
   account.balances = info.data.balances.map(e => {
      return {
         asset: e.asset,
         free: Number(e.free),
         locked: Number(e.locked)
      }
   });

   return account;
};
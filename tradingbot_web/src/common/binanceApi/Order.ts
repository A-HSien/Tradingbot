import axios from "axios";
import { Account } from "../../domains/Account";
import { Action, ActionRecord } from "../../domains/Action";
import { baseUrl, createSignature } from "./common";


const response = {
    "symbol": "BTCUSDT",
    "orderId": 28,
    "orderListId": -1, // OCO订单ID，否则为 -1
    "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
    "transactTime": 1507725176595
};
type OrderResult = typeof response;

const api = '/api/v3/order';

export const order: Action = async (account: Account) => {

    const params = new URLSearchParams({
        symbol: "LTCBTC",
        side: "BUY",
        type: "MARKET",
        quantity: (100).toString(),
        timestamp: Date.now().toString(),
    });
    const signature = createSignature(
        account.apiSecret,
        params.toString()
    );
    params.append('signature', signature);

    const paramsString = params.toString();
    const result: ActionRecord = {
        userId: account.ownerId,
        accountId: account.id!,
        action: 'order',
        params: paramsString
    };

    return await axios.post<OrderResult>(
        baseUrl + api,
        paramsString,
        {
            headers: { 'X-MBX-APIKEY': account.apiKey }
        }
    )
        .then(resp => {
            result.result = resp.data;
            result.success = true;
        })
        .catch(err => {
            result.result = err.response.data;
            result.success = false;
        })
        .then(() => result);
};
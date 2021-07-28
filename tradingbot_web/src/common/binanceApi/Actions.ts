import { Action, ActionRecord } from "../../domains/Action";
import { createTradingParams } from "../../domains/Signal";
import { signedPost } from "./HttpMethods";
import { FutureApiBase } from "./common";
import FutureOrderAction from "./FutureOrderAction";



export const generalSignedPostAction: Action = async (
    actionKey, account, signal

) => {
    const action = actions[actionKey];
    const result: ActionRecord = {
        userId: account.ownerId,
        accountId: account.id!,
        action: actionKey,
    };

    const params = createTradingParams(signal, action.tradingParamKeys)
    result.params = params.toString();


    return signedPost<any>(action.api, params, account.apiKey, account.apiSecret)
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


export const actions = {
    /*     Order: {
            api: SpotApiBase + '/api/v3/order',
            description: '現貨-下單',
            action: signedPost,
        },
        OrderTest: {
            api: SpotApiBase + '/api/v3/order/test',
            description: '現貨-下單測試',
            action: signedPost,
        }, */
    FOrder: FutureOrderAction,
    FOrderTest: {
        ...FutureOrderAction,
        api: FutureApiBase + '/fapi/v1/order/test',
        description: 'U本位合約-下單測試',
    },
    /*     FPositionMargin: {
            api: FutureApiBase + '/fapi/v1/positionMargin',
            description: 'U本位合約-調整逐倉保證金',
            action: signedPost,
        }, */
};

export type ActionKey = keyof typeof actions;
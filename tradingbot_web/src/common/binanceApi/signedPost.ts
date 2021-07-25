import axios from "axios";
import { actions } from ".";
import { Action, ActionRecord } from "../../domains/Action";
import { createTradingParams } from "../../domains/Signal";
import { baseUrl, createSignature } from "./common";




export const signedPost: Action = async (account, signal) => {
    const result: ActionRecord = {
        userId: account.ownerId,
        accountId: account.id!,
        action: signal.action,
    };
    const action = actions[ signal.action];
    if (!action) {
        const message = 'action not found';
        console.warn(message, signal);
        result.result = { ...signal, message };
        result.success = false;
        return result;
    }

    const api = action.api;
    const params = createTradingParams(signal);
    const signature = createSignature(
        account.apiSecret,
        params.toString()
    );
    params.append('signature', signature);

    const paramsString = params.toString();
    result.params = paramsString;

    return await axios.post(
        baseUrl + api,
        paramsString,
        {
            headers: { 
                'X-MBX-APIKEY': account.apiKey ,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
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
import { Account } from "../../domains/Account";

export const SpotApiBase = 'https://api.binance.com';
export const FutureApiBase = 'https://fapi.binance.com';



export const logApiError = (account: Account, err: any) => {
    const { id, ownerId, name } = account;
    let errMsg = '';
    if (!err?.response) {
        console.error('error before call binance api', { id, ownerId, name, err });
        errMsg = err.toString();

    } else {
        const { code, msg } = err.response.data;
        errMsg = `${msg}(${code})`;
        console.error('error when call binance api', { id, ownerId, name, errMsg });
    }
    return errMsg;
};

export const serial = <T>(funcs: ((...args: any[]) => Promise<T>)[]) =>
    funcs.reduce((promise, func) =>
        promise.then(
            result => func().then(Array.prototype.concat.bind(result))
        ), Promise.resolve([] as T[]));
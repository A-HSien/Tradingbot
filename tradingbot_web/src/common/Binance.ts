import Binance from 'binance-api-node';
import { Account } from '../domains/Account';


export const updateAccountInfo = (account: Account) => {

    account.balancesLastUpdateTime = new Date();
    const client = Binance({
        apiKey: account.apiKey,
        apiSecret: account.apiSecret
    });
    return client.accountInfo()
        .then(info => {
            account.balances = info.balances.map(e => {
                return {
                    asset: e.asset,
                    free: Number(e.free),
                    locked: Number(e.locked),
                };
            });
            account.error = '';
            return account;
        })
        .catch(err => {
            console.error('getAccountInfo error:', err);
            account.error = err.toString();
            return account;
        });
}
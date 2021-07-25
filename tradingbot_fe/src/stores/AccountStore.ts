import axios from "axios";
import { makeAutoObservable } from "mobx";
import { Account, EditingAccount } from "src/models/Account";

export class AccountStore {

    accounts: Account[] = [];

    constructor() {
        makeAutoObservable(this);
    };

    loadAccounts = async () => {
        const accounts = await axios.get<Account[]>('/account/all').then(r => r.data);
        accounts.forEach(acc => {
            acc.balances = (acc.balances || [])
                .map(ba => {
                    ba.free = Number(ba.free);
                    ba.locked = Number(ba.locked);
                    ba.sum = ba.free + ba.locked;
                    return ba;
                })
                .sort((a, b) => a.sum - b.sum);
        });
        this.accounts = accounts;
    };

    save = async (account: EditingAccount) => {
        return await axios.post('/account/save', account).then(r => r.data);
    };
};

export const accountStore = new AccountStore();
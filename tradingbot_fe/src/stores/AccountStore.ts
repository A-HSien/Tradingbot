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
        this.accounts = accounts;
    };

    save = async (account: EditingAccount) => {
        return await axios.post<string>('/account/save', account).then(r => r.data);
    };
};

export const accountStore = new AccountStore();
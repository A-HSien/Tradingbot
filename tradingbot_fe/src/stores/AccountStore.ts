import axios from "axios";
import { makeAutoObservable } from "mobx";
import { Account } from "src/models/Account";

export class AccountStore {

    accounts: Account[] = [];

    constructor() {
        makeAutoObservable(this);
    };

    private setAccounts = (accounts: Account[]) => {
        this.accounts = accounts;
    };

    loadAccounts = async () => {
        const accounts = await axios.get<Account[]>('/account/all').then(r => r.data);
        this.setAccounts(accounts);
    };
};

export const accountStore = new AccountStore();
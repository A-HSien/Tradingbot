import axios from "axios";
import { makeAutoObservable } from "mobx";
import { Account } from "src/models/Account";

export class AccountStore {

    accounts: Account[] = [];
    groupNames: string[] = [];

    constructor() {
        makeAutoObservable(this);
    };

    private setAccounts = (accounts: Account[]) => this.accounts = accounts;
    private setGroupNames = (groupNames: string[]) => this.groupNames = groupNames;

    loadAccounts = async () => {
        const accounts = await axios.get<Account[]>('/account/all').then(r => r.data);
        this.setAccounts(accounts);
        const set = new Set<string>();
        accounts.forEach(acc => acc.groupName && set.add(acc.groupName));
        this.setGroupNames(Array.from(set));
    };
};

export const accountStore = new AccountStore();
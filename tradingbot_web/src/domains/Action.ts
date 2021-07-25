import { ActionKey } from "../common/binanceApi";
import { Account } from "./Account";
import { Signal } from "./Signal";


export type ActionRecord = {
    userId: string,
    accountId: string,
    action: ActionKey,
    params?: string,
    result?: any,
    success?: boolean,
    createdAt?: Date,
};


export type Action = (account: Account,signal: Signal) => Promise<ActionRecord>
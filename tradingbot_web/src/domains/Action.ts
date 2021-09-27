import { ActionKey } from "../common/binanceApi/Actions";
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


export type Action = (
    actionKey: ActionKey,
    account: Account,
    signal: Signal,
) => Promise<ActionRecord>
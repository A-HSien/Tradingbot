import { ActionKey } from "../common/binanceApi";

export type Signal = {
    action: ActionKey,
    userId: string,
    createdAt?: Date,
};
import { ActionKey } from "../common/binanceApi";

export type Signal = {
    action: ActionKey,
    userId: string,
    createdAt?: Date,
    [key: string]: any,
};

export const createTradingParams = (signal: Signal,) => {
    const params = new URLSearchParams({ timestamp: Date.now().toString() });
    Object.keys(signal)
        .filter(key => !['action', 'userId', 'createdAt'].includes(key))
        .forEach(key => params.append(key, signal[key]?.toString()));
    return params;
};
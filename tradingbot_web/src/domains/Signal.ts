import { ActionKey } from "../common/binanceApi/Actions";


export const SignalBase = {
    action: '' as ActionKey,
    token: '',
    userId: '',
};

const signalBaseKeys = Object.keys(SignalBase);


export type TradingParams = {
    symbol: string,
    [key: string]: any,
};

export type Signal = typeof SignalBase & TradingParams;


export const createTradingParams = (signal: Signal, tradingParams?: string[]) => {
    const params = new URLSearchParams();
    const keys = Object.keys(signal);
    (
        !tradingParams ?
            keys.filter(key => !signalBaseKeys.includes(key))
            : keys.filter(key => tradingParams.includes(key))
    )
        .forEach(key => {
            let value: string = signal[key]?.toString();
            if (key === 'side') value = value.toUpperCase();
            params.append(key, value);
        });
    return params;
};
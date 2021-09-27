import { ActionKey } from "../common/binanceApi/Actions";
import { TokenType, verifyToken } from "./Token";


export const SignalBase = {
    action: '' as ActionKey,
    groupName: '',
    token: '',
    userId: '',
    email: '',
    currentPrice: 0,
};

const signalBaseKeys = Object.keys(SignalBase);


export type TradingParams = {
    symbol: string,
    side: string,
    quantity: number,
    [key: string]: string | number,
};

export type Signal = typeof SignalBase & TradingParams;


export const decodeSignal = async (signal: Signal) => {
    const tokenData = await verifyToken(signal.token, TokenType.signal);
    console.log('decodeSignal tokenData', tokenData);

    // validation
    ['userId', 'email'].forEach(field => {
        if (!tokenData[field])
            throw new Error(
                `Error verifying token : ${field} is required`
            );
    });

    signal.userId = tokenData.userId;
    signal.email = tokenData.email;
    signal.token = '---' + signal.token!.substr(-8, 8);;
    signal['tokenExp'] = tokenData.exp;

    return signal;
};


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
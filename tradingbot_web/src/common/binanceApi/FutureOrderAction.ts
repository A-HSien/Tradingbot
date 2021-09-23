import { Action } from "../../domains/Action";
import { FutureApiBase } from "./common";
import { generalSignedPostAction } from "./Actions";
import { getExchangeInfo } from "./ExchangeInfo";



const tradingParams: Record<string, string> = {
    symbol: '',
    side: '',
    type: 'MARKET',
    quantity: '',
    newOrderRespType: 'RESULT',
    timestamp: '',
};
const keys = Object.keys(tradingParams);

const futureNewOrder: Action = async (actionKey, account, originalSignal) => {

    const signal = { ...originalSignal };
    const quantitySetting = account.quantities?.find(e => e.symbol === signal.symbol);
    if (quantitySetting)
        signal.quantity = Number(quantitySetting.quantity) / signal.currentPrice;
    const prev = account.balances?.positions?.find(pos => pos.symbol === signal.symbol)?.positionAmt;
    if (prev) {
        const targetIsBuy = (signal.side as string).toUpperCase() === 'BUY';
        const stopQuantity = Number(prev) * -1; // 平倉
        const targetQuantity = Number(signal.quantity) * (targetIsBuy ? 1 : -1);
        const toTrade = stopQuantity + targetQuantity
        signal.site = toTrade > 0 ? 'BUY' : 'SELL';
        signal.quantity = Math.abs(toTrade);
    }
    console.log(`futureNewOrder account:${account.name}`, {
        account: account.name,
        prevPosition: prev,
        customQuantity: quantitySetting?.quantity,
        toTrade:  signal.quantity,
    });

    const precision = getExchangeInfo(signal.symbol).quantityPrecision;
    signal.quantity = Number(signal.quantity.toFixed(precision));

    keys.forEach(key => {
        const defaultValue = tradingParams[key];
        if (defaultValue) signal[key] = defaultValue;
    })
    return generalSignedPostAction(actionKey, account, signal);
};

const FutureOrderAction = {
    api: FutureApiBase + '/fapi/v1/order',
    description: 'U本位合約-下單',
    action: futureNewOrder,
    tradingParamKeys: Object.keys(tradingParams),
};
export default FutureOrderAction;
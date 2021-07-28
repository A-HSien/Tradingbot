import { Action } from "../../domains/Action";
import { FutureApiBase } from "./common";
import { generalSignedPostAction } from "./Actions";
import { infos } from "./ExchangeInfo";



const tradingParams: Record<string, string> = {
    symbol: '',
    side: '',
    type: 'MARKET',
    quantity: '',
    newOrderRespType: 'RESULT',
    timestamp: '',
};
const keys = Object.keys(tradingParams);

const futureNewOrder: Action = async (actionKey, account, signal) => {

    const prev = account.balances?.positions?.find(pos => pos.symbol === signal.symbol)?.positionAmt;
    signal.prevQuantity = prev;
    signal.targetQuantity = signal.quantity;
    if (prev) {
        const targetIsBuy = (signal.side as string).toUpperCase() === 'BUY';
        const stop = Number(prev) * -1; // 平倉
        const targetNu = Number(signal.quantity) * (targetIsBuy ? 1 : -1);
        signal.site = targetNu > 0 ? 'BUY' : 'SELL';
        signal.quantity = Math.abs(targetNu);
    }

    const precision = infos[signal.symbol].quantityPrecision;
    signal.quantity = Number(signal.quantity).toFixed(precision);

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
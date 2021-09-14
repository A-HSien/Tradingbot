import { Account } from "../../domains/Account";
import { FutureApiBase, logApiError } from "./common";
import { queryFutureAccountBalance } from "./FutureAccountBalance";
import { signedGet } from "./HttpMethods";


// 获取账户损益资金流水
const api = FutureApiBase + '/fapi/v1/income';
const response = [
    {
        "symbol": "", // 交易对，仅针对涉及交易对的资金流
        "incomeType": "TRANSFER",   // 资金流类型
        "income": "-0.37500000", // 资金流数量，正数代表流入，负数代表流出
        "asset": "USDT", // 资产内容
        "info": "TRANSFER", // 备注信息，取决于流水类型
        "time": 1570608000000, // 时间
        "tranId": "9689322392",      // 划转ID
        "tradeId": ""                    // 引起流水产生的原始交易ID
    },
    {
        "symbol": "BTCUSDT",
        "incomeType": "COMMISSION",
        "income": "-0.01000000",
        "asset": "USDT",
        "info": "COMMISSION",
        "time": 1570636800000,
        "tranId": "9689322392",
        "tradeId": "2059192"
    }
];
type ResponseType = typeof response;
const timeWindow = 60 * 24 * 60 * 60 * 1000; // 60d

export const queryAccountIncome = async (account: Account) => {
    const now = Date.now();
    const endTime = now.toString();
    const startTime = (now - timeWindow).toString();
    return signedGet<ResponseType>(
        api,
        new URLSearchParams({ startTime, endTime, limit: '1000' }),
        account.apiKey, account.apiSecret
    ).then(res => res.data);
};
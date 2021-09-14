import _ from "lodash";
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
    }
];
type ResponseType = typeof response;
const oneDay = 24 * 60 * 60 * 1000;
const timeWindow = 60 * oneDay;
const limit = 1000;

const _queryAccountIncome = (account: Account, startTime: number, endTime: number) => {
    return signedGet<ResponseType>(
        api,
        new URLSearchParams({
            startTime: startTime.toString(),
            endTime: endTime.toString(),
            limit: limit.toString(),
        }),
        account.apiKey, account.apiSecret
    ).then(res => _.orderBy(res.data, e => e.time, 'desc'));
};

export const queryAccountIncome = async (account: Account) => {
    const now = Date.now();
    const endTime = now;
    const startTime = now - timeWindow;
    const result = await _queryAccountIncome(account, startTime, endTime);
    let next = result.length === limit;
    while (next) {
        const newResult = await _queryAccountIncome(account, result[0].time, endTime);
        result.concat(...newResult);
        next = newResult.length === limit;
    }
    return _.uniqBy(result, e => e.tranId);
};
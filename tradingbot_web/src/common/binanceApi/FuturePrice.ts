import { FutureApiBase } from "./common";
import { BinanceAPI } from "./HttpMethods";

const api = FutureApiBase + "/fapi/v1/ticker/price";


const result = {
    "symbol": "BTCUSDT",    // 交易对
    "price": "6000.01",     // 价格
    "time": 1589437530011   // 撮合引擎时间
};
type Result = typeof result;


export const getFuturePrice = async (symbol: string) => {
    return await BinanceAPI.get<Result>(api, { params: { symbol } })
        .then(resp => resp.data);
};
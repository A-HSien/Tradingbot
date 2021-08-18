import { Account } from "../../domains/Account";
import { FutureApiBase } from "./common";
import { getAllSymbol } from "./ExchangeInfo";
import { signedPost } from "./HttpMethods";


const update = (api: string, account: Account, params: URLSearchParams) => {
    return signedPost(
        api, params, account.apiKey, account.apiSecret
    )
        .then(_ => true)
        .catch(err => {
            console.error(api + " error: ", err);
            return false;
        });
};

const updateAll = (api: string, account: Account, params: URLSearchParams) => {
    const tasks = Promise.all(getAllSymbol().map(symbol => {
        const each = new URLSearchParams(params);
        each.append(symbol, symbol);
        return update(api, account, each)
            .then(result => ({ symbol, result }));
    }));
    return tasks;
};



const positionSideApi = FutureApiBase + '/fapi/v1/positionSide/dual';
/** positionSide => "true": Hedge Mode;雙向 "false": One-way Mode單向(default) */
const setPositionSide = (account: Account, positionSide = false) => {
    const params = new URLSearchParams({
        dualSidePosition: positionSide.toString()
    });
    return update(positionSideApi, account, params)
        .then(result => ([{ symbol: 'all', result }]));
};


const marginTypeApi = FutureApiBase + '/fapi/v1/marginType';
/** marginType	保证金模式 ISOLATED(逐仓), CROSSED(全仓) */
const setMarginType = (account: Account, isolated = true) => {
    const params = new URLSearchParams({
        isolated: isolated ? "ISOLATED" : "CROSSED"
    });
    return updateAll(marginTypeApi, account, params);
};


const setLeverageApi = FutureApiBase + '/fapi/v1/leverage';
/** leverage 1-125 */
const setLeverage = (account: Account, leverage: number) => {
    if (leverage < 1 || leverage > 125)
        return Promise.reject([]);
    const params = new URLSearchParams({
        leverage: leverage.toString(),
    });
    return updateAll(setLeverageApi, account, params);
};

export default {
    setPositionSide,
    setMarginType,
    setLeverage,
};
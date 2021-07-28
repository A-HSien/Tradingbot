export type Balances = {
    availableBalance: string,
    positions: Position[],
};


const position =         {
    "symbol": "BTCUSDT",  // 交易对
    "initialMargin": "0",   // 当前所需起始保证金(基于最新标记价格)
    "maintMargin": "0", //维持保证金
    "unrealizedProfit": "0.00000000",  // 持仓未实现盈亏
    "positionInitialMargin": "0",  // 持仓所需起始保证金(基于最新标记价格)
    "openOrderInitialMargin": "0",  // 当前挂单所需起始保证金(基于最新标记价格)
    "leverage": "100",  // 杠杆倍率
    "isolated": true,  // 是否是逐仓模式
    "entryPrice": "0.00000",  // 持仓成本价
    "maxNotional": "250000",  // 当前杠杆下用户可用的最大名义价值
    "positionSide": "BOTH",  // 持仓方向
    "positionAmt": "0",      // 持仓数量
    "updateTime": 0         // 更新时间 
};
export type Position = typeof position;

export type Account = {
    id: string,
    name: string,
    quota: number,
    disabled: boolean,

    balances?: Balances,
    error?: string
};

export type EditingAccount = Account & {
    apiKey?: string,
    apiSecret?: string,
};


export const mockAccounts = Array(100).fill({}).map((_, i) => (
    {
        name: 'account-' + i,
        balances: [],
        quota: 1000,
        disabled: Math.random() > 0.8,
    }
));
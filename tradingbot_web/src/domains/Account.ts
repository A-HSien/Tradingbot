import { accountInfoResp } from "../common/binanceApi/FutureAccountBalance";


export type AccountSecrets = {
    apiKey: string,
    apiSecret: string,
};


type Position = typeof accountInfoResp.positions[0];


export type Balances = {
    availableBalance: string,
    positions: Position[],
};

export type Account = AccountSecrets & {
    id?: string,
    ownerId: string,
    groupName?: string,
    name: string,
    disabled?: boolean,
    balances?: Balances,
    balancesLastUpdateTime?: Date,
    error?: string,
};

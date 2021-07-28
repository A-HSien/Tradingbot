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
    name: string,
    disabled?: boolean,
    quota: number,
    balances?: Balances,
    balancesLastUpdateTime?: Date,
    error?: string,
};



export const mockAccounts: Account[] = [
    {
        name: 'ahsien',
        apiKey: 'jZkWnn9SLkl1RD3wt4rioMU74U0POhIXrjQ0kvO8hvclePOXYIFwgg7Oo4mANwxK',
        apiSecret: 'nyJwssvHge9uOS6NrYK69kFiC356kCmbjq4fqSAE8arqOBrNlsfALdDQD8Pihg4r',
    } as Account,
];
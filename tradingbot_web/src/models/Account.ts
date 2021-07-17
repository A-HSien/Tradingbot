import { AssetBalance } from "binance-api-node";


export type AccountSecrets = {
    apiKey: string;
    apiSecret: string;
};

export interface Account extends AccountSecrets {
    id: string;
    name: string;
    disabled?: boolean;
    quota: number,
    balances?: AssetBalance[],
    error?: string
}



export const mockAccounts: Account[] = [
    {
        name: 'ahsien',
        apiKey: 'jZkWnn9SLkl1RD3wt4rioMU74U0POhIXrjQ0kvO8hvclePOXYIFwgg7Oo4mANwxK',
        apiSecret: 'nyJwssvHge9uOS6NrYK69kFiC356kCmbjq4fqSAE8arqOBrNlsfALdDQD8Pihg4r',
    } as Account,
];
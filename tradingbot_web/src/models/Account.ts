export interface Account {
    id?: string;
    name: string;
    apiKey: string;
    apiSecret: string;
    disabled?: boolean;
}



export const accounts: Account[] = [
    {
        name: 'ahsien',
        apiKey: 'jZkWnn9SLkl1RD3wt4rioMU74U0POhIXrjQ0kvO8hvclePOXYIFwgg7Oo4mANwxK',
        apiSecret: 'nyJwssvHge9uOS6NrYK69kFiC356kCmbjq4fqSAE8arqOBrNlsfALdDQD8Pihg4r',
    },

/*     {
        name: 'xxx',
        apiKey: 'jZkWnn9SLkl1RD3wt4rioMU74U0POhIXrjQ0kvO8hvclePOXYIFwgg7Oo4mANwxx',
        apiSecret: 'nyJwssvHge9uOS6NrYK69kFiC356kCmbjq4fqSAE8arqOBrNlsfALdDQD8Pihg4x',
    } */
];
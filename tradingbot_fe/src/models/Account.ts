export type Balance = {
    asset: string,
    free: number,
    locked: number,
    sum: number,
};

export type Account = {
    id: string,
    name: string,
    quota: number,
    disabled: boolean,

    balances?: Balance[],
    error?: string
};

export type EditingAccount = Account & {
    apiKey?: string,
    secretKey?: string,
};


export const mockAccounts = Array(100).fill({}).map((_, i) => (
    {
        name: 'account-' + i,
        balances: [],
        quota: 1000,
        disabled: Math.random() > 0.8,
    }
));
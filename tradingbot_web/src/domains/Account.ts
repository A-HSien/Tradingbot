import { accountInfoResp } from "../common/binanceApi/FutureAccountBalance";
import { UserProfile } from '@loopback/security';


export type AccountSecrets = {
    apiKey: string,
    apiSecret: string,
};


type Position = typeof accountInfoResp.positions[0];


export type Balances = {
    availableBalance?: string,
    totalUnrealizedProfit?: string,
    positions?: Position[],
};

export type Account = AccountSecrets & {
    id?: string,
    ownerId: string,
    delegateUserEmail?: string,
    groupName?: string,
    name: string,
    disabled?: boolean,
    balances?: Balances,
    balancesLastUpdateTime?: Date,
    quantities?:  { symbol: string, quantity: number }[],
    error?: string,
};

export const validateOwnership = (
    account: Account | null, userProfile: UserProfile
) => {
    if (
        !account ||
        (
            account.ownerId !== userProfile.id &&
            account.delegateUserEmail !== userProfile.email
        )
    ) {
        const msg = '帳號不存在或權限不足';
        console.error(msg, { accountId: account?.id, msg, ...userProfile });
        throw Error(msg)
    }
    return account;
};
import { Schema, model, SchemaDefinition } from 'mongoose';
import { Account, Balances, validateOwnership } from '../domains/Account';
import { mapIdField } from './utilities';
import { UserProfile } from '@loopback/security';


const balancesDef: SchemaDefinition<Balances> = {
    availableBalance: { type: String },
    totalUnrealizedProfit: { type: String },
    positions: [Object],
};
const balancesSchema = new Schema<Balances>(balancesDef);
mapIdField(balancesSchema);



const accountDef: SchemaDefinition<Account> = {
    apiKey: { type: String, required: true },
    apiSecret: { type: String, required: true },
    ownerId: { type: String, required: true },
    delegateUserEmail: { type: String },
    name: { type: String },
    groupName: { type: String },
    disabled: { type: Boolean },
    balances: balancesSchema,
    balancesLastUpdateTime: { type: Date },
    error: { type: String },
};
const schema = new Schema<Account>(accountDef);
mapIdField(schema);

const AccountRepo = model<Account>('Account', schema);

export default AccountRepo;

export const getAuthorizedAccount = async (id: string, userProfile: UserProfile) => {
    const account = await AccountRepo.findById(id);
    return validateOwnership(account, userProfile);
};

export const fetchAccountsByUser = (userId: string, email?: string) => {
    const query: Partial<Account>[] = [
        { ownerId: userId },
    ];
    if (email) query.push({ delegateUserEmail: email })
    return AccountRepo.find().or(query);
};
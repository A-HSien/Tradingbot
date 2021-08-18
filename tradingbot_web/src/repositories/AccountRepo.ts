import { Schema, model, SchemaDefinition } from 'mongoose';
import { Account, Balances } from '../domains/Account';
import { mapIdField } from './utilities';


const balancesDef: SchemaDefinition<Balances> = {
    availableBalance: { type: String, required: true },
    positions: [Object],
};
const balancesSchema = new Schema<Balances>(balancesDef);
mapIdField(balancesSchema);



const accountDef: SchemaDefinition<Account> = {
    apiKey: { type: String, required: true },
    apiSecret: { type: String, required: true },
    ownerId: { type: String, required: true },
    name: { type: String },
    groupName: { type: String },
    disabled: { type: Boolean },
    balances: balancesSchema,
    balancesLastUpdateTime: { type: Date },
    error: { type: String },
};
const schema = new Schema<Account>(accountDef);
mapIdField(schema);

export default model<Account>('Account', schema);
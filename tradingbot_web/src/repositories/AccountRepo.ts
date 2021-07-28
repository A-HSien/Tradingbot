import { Schema, model, SchemaDefinition } from 'mongoose';
import { Account, Balances } from '../domains/Account';
import { mapIdField } from './utilities';


const balancesDef: SchemaDefinition<Balances> = {
    availableBalance: { type: String, required: true },
    positions: [Object],
};
const balancesSchema = new Schema<Balances>(balancesDef);
mapIdField(balancesSchema);

const schema = new Schema<Account>({
    apiKey: { type: String, required: true },
    apiSecret: { type: String, required: true },
    ownerId: { type: String, required: true },
    name: { type: String },
    disabled: { type: Boolean },
    quota: { type: Number },
    balances: balancesSchema,
    balancesLastUpdateTime: { type: Date },
    error: { type: String },
});
mapIdField(schema);

export default model<Account>('Account', schema);
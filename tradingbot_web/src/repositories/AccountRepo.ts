import { Schema, model } from 'mongoose';
import { Account, Balance } from '../domains/Account';
import { mapIdField } from './utilities';


const balanceSchema = new Schema<Balance>({
    asset: { type: String, required: true },
    free: { type: Number, required: true },
    locked: { type: Number, required: true },
});
mapIdField(balanceSchema);

const schema = new Schema<Account>({
    apiKey: { type: String, required: true },
    apiSecret: { type: String, required: true },
    ownerId: { type: String, required: true },
    name: { type: String },
    disabled: { type: Boolean },
    quota: { type: Number },
    balances: [balanceSchema],
    balancesLastUpdateTime: { type: Date },
});
mapIdField(schema);

export default model<Account>('Account', schema);
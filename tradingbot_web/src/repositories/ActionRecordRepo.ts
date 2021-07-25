import { Schema, model, SchemaDefinition } from 'mongoose';
import { ActionRecord } from '../domains/Action';
import { Expires, mapIdField } from './utilities';



const def: SchemaDefinition<ActionRecord> = {
    userId: { type: String, required: true },
    accountId: { type: String, required: true },
    action: { type: String, required: true },
    params: { type: String },
    result: Object,
    success: { type: Boolean, required: true },
    createdAt: { type: Date, expires: Expires, default: Date.now },
}
const schema = new Schema(def);
mapIdField(schema);

export default model<ActionRecord>('ActionResult', schema);
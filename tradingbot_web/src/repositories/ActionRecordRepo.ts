import { Schema, model, SchemaDefinition } from 'mongoose';
import { ActionRecord } from '../domains/Action';
import { autoExpire, mapIdField } from './utilities';



const def = autoExpire<ActionRecord>({
    userId: { type: String, required: true },
    accountId: { type: String, required: true },
    action: { type: String, required: true },
    params: { type: String },
    result: Object,
    success: { type: Boolean, required: true },
});
const schema = new Schema(def);
mapIdField(schema);

export default model<ActionRecord>('ActionResult', schema);
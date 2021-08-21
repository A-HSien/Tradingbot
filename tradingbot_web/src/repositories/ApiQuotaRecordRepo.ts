import { Schema, model } from 'mongoose';
import { autoExpire, mapIdField } from './utilities';
import { ApiQuotaRecord } from '../domains/ApiQuotaRecord';



const def = autoExpire<ApiQuotaRecord>({
    time: { type: Date },
    ip: { type: String },
    key: { type: String, },
    value: { type: String },
});
const schema = new Schema(def);
mapIdField(schema);

export default model<ApiQuotaRecord>('ApiQuotaRecord', schema);
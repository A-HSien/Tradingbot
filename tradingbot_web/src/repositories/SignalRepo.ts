import { model, Schema } from "mongoose";
import { Signal } from "../domains/Signal";
import { autoExpire, mapIdField } from "./utilities";


const def = autoExpire<Signal>({
    action: { type: String, required: true },
    userId: { type: String, required: true },
    groupName: { type: String },
});
var schema = new Schema(def, { strict: false });
mapIdField(schema);

export default model<Signal>('Signal', schema);
import { model, Schema } from "mongoose";
import { mapIdField } from "./utilities";

var schema = new Schema({
    userId: { type: String, required: true },
}, { strict: false });
mapIdField(schema);
export default model('Signal', schema);
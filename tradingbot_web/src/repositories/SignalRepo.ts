import { model, Schema, SchemaDefinition } from "mongoose";
import { Signal } from "../domains/Signal";
import { Expires, mapIdField } from "./utilities";


const def: SchemaDefinition<Signal> = {
    action: { type: String, required: true },
    userId: { type: String, required: true },
    createdAt: { type: Date, expires: Expires, default: Date.now },
};
var schema = new Schema(def, { strict: false });
mapIdField(schema);

export default model<Signal>('Signal', schema);
import { Schema, model } from 'mongoose';
import { AppUser } from '../domains/AppUser';
import { mapIdField } from './utilities';


const schema = new Schema<AppUser>({
    email: { type: String, required: true },
    activated: { type: Boolean, required: true },
    submitted: { type: Boolean, required: true },
});
mapIdField(schema);

export default model('AppUser', schema);
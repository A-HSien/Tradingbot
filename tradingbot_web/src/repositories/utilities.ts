import { Schema } from 'mongoose';

export const mapIdField = <T>(schema: Schema<T>) =>
    schema.set('toJSON', { virtuals: true })
        .set('toObject', { virtuals: true });
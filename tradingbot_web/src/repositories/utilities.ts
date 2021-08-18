import { Schema, SchemaDefinition } from 'mongoose';

export const mapIdField = <T>(schema: Schema<T>) =>
    schema.set('toJSON', { virtuals: true })
        .set('toObject', { virtuals: true });


export const Expires = 60 * 60 * 24 * 30;

export const autoExpire = <T>(def: SchemaDefinition<T>, expires = Expires) => {
    return {
        ...def,
        createdAt: { type: Date, expires, default: Date.now },
    };
};
import { IUser } from "../auth";

export type AppUser = IUser & {
    activated?: boolean,
    submitted?: boolean,
    encryptkey?: string,
};
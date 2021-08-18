import { IUser } from "../auth/IUser";

export type AppUser = IUser & {
    activated?: boolean,
    submitted?: boolean,
    encryptkey?: string,
};
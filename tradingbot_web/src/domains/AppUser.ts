import { User } from "../auth";

export type AppUser = User & {
    activated?: boolean,
    submitted?: boolean,
    encryptkey?: string,
};
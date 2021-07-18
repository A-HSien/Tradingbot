import { User } from "@loopback/authentication-jwt";

export type AppUser = User & {
    activated?: boolean,
    submitted?: boolean,
};
import { makeAutoObservable } from "mobx";

export enum AuthStatus { 'Authenticated', 'Authorized' }

export class AuthStore {
    authStatus?: AuthStatus;

    constructor() {
        makeAutoObservable(this);
    };

    setAuthStatus = (status: AuthStatus | undefined) => {
        this.authStatus = status;
    };
};

export const authStore = new AuthStore();
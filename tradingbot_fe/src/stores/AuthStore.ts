import Cookies from "js-cookie";
import { makeAutoObservable } from "mobx";

export enum AuthStatus { 'Authenticated', 'Authorized' }

export class AuthStore {
    authStatus?: AuthStatus;

    constructor() {
        makeAutoObservable(this);


        const token = Cookies.get('auth-token');
        this.setAuthStatus(token ? AuthStatus.Authorized : undefined);

    };

    setAuthStatus = (status: AuthStatus | undefined) => {
        this.authStatus = status;
    };
};

export const authStore = new AuthStore();
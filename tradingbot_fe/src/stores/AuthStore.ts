import Cookies from "js-cookie";
import { makeAutoObservable } from "mobx";

export enum AuthStatus { 'Authenticated', 'Authorized' }

export class AuthStore {
    authStatus?: AuthStatus;

    constructor() {
        makeAutoObservable(this);


        const token = Cookies.get('auth-token');
        this.authStatus =token ? AuthStatus.Authorized : undefined;

    };

    logout = () => {
        Cookies.remove('auth-token');
        this.authStatus = undefined;
    };
};

export const authStore = new AuthStore();
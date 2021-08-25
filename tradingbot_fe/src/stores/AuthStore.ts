import Cookies from "js-cookie";
import { makeAutoObservable } from "mobx";

export enum AuthStatus { 'Authenticated', 'Authorized' }

export class AuthStore {
    authStatus?: AuthStatus;
    userId = '';
    email = '';

    constructor() {
        makeAutoObservable(this);


        const token = Cookies.get('auth-token');
        const userId = Cookies.get('userId');
        const email = Cookies.get('email');
        if (!token || !userId || !email) return;
        this.authStatus = AuthStatus.Authorized;
        this.userId = userId;
        this.email = email;
    };

    logout = () => {
        Cookies.remove('auth-token');
        this.authStatus = undefined;
        this.userId = '';
        this.email = '';
    };
};

export const authStore = new AuthStore();
import { generatePath, RouteProps } from "react-router-dom";
import AccountEditor from "src/containers/account/AccountEditor";
import Accounts from "src/containers/account/Accounts";
import Login from "src/containers/Login";
import Register from "src/containers/Register";
import Signals from "src/containers/Signals";
import { AuthStatus } from "src/stores/AuthStore";

export type LinkProps = RouteProps & {
    lable?: string,
    protectionLevel?: AuthStatus,
};

export const linkMap: Record<
    'Login' | 'Register' | 'Accounts' | 'Account' | 'Signals',
    LinkProps
> = {
    Login: {
        path: "/",
        exact: true,
        component: Login
    },
    Register: {
        path: "/Register",
        component: Register,
        protectionLevel: AuthStatus.Authenticated,
    },
    Accounts: {
        path: "/Accounts",
        lable: '幣安帳戶',
        component: Accounts,
        protectionLevel: AuthStatus.Authorized,
    },
    Account: {
        path: "/Account/:id",
        lable: '編輯幣安帳戶',
        component: AccountEditor,
        protectionLevel: AuthStatus.Authorized,
    },
    Signals: {
        path: "/Signals",
        lable: '訊號紀錄',
        component: Signals,
        protectionLevel: AuthStatus.Authorized,
    }
};

export const getLinkPath = (link: RouteProps) =>
    link.path ? generatePath(link.path as string) : '';


export const menus = [
    linkMap.Accounts, linkMap.Signals
];
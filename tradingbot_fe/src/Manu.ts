import { generatePath, RouteProps } from "react-router-dom";
import AccountEditor from "src/pages/account/AccountEditor";
import AccountRecord from "src/pages/account/AccountRecord";
import Accounts from "src/pages/account/Accounts";
import Login from "src/pages/Login";
import Register from "src/pages/Register";
import SignalManual from "src/pages/signal/SignalManual";
import Signals from "src/pages/signal/SignalsRecord";
import { AuthStatus } from "src/stores/AuthStore";
import { SystemStatus } from "./pages/SystemStatus";

export type LinkProps = RouteProps & {
    lable?: string,
    protectionLevel?: AuthStatus,
};


export const linkMap: Record<
    'Login' | 'Register' |
    'Accounts' | 'Account' | 'AccountRecord' |
    'Signals' | 'SignalManual' | 'SystemStatus',
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
    AccountRecord: {
        path: "/AccountRecord/:name",
        lable: '帳戶操作紀錄',
        component: AccountRecord,
        protectionLevel: AuthStatus.Authorized,
    },
    Signals: {
        path: "/Signals",
        lable: '訊號紀錄',
        component: Signals,
        protectionLevel: AuthStatus.Authorized,
    },
    SignalManual: {
        path: "/SignalManual",
        lable: '訊號設定說明',
        component: SignalManual,
        protectionLevel: AuthStatus.Authorized,
    },
    SystemStatus: {
        path: "/SystemStatus",
        lable: '系統狀態',
        component: SystemStatus,
        protectionLevel: AuthStatus.Authorized,
    },
};

export const getLinkPath = (link: RouteProps) =>
    link.path ? generatePath(link.path as string) : '';


export const menus = [
    linkMap.Accounts,
    linkMap.Signals,
    linkMap.SignalManual,
    linkMap.SystemStatus,
];
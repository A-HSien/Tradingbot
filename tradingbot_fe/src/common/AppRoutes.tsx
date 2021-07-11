import { observer } from "mobx-react";
import { generatePath, Redirect, Route, RouteProps, Switch } from "react-router-dom";
import Accounts from "../pages/Accounts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Signals from "../pages/Signals";
import { AuthStatus, authStore } from "../stores/AuthStore";

export type LinkProps = RouteProps & {
    lable?: string,
    protectionLevel?: typeof authStore.authStatus,
};

export const linkMap: Record<
    'Login' | 'Register' | 'Accounts' | 'Signals',
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
    Signals: {
        path: "/Signals",
        lable: '訊號紀錄',
        component: Signals,
        protectionLevel: AuthStatus.Authorized,
    }
};

export const menus = [
    linkMap.Accounts, linkMap.Signals
];

export const links = Object.values(linkMap);

export const getLinkPath = (link: RouteProps) =>
    link.path ? generatePath(link.path as string) : '';


const AppRoutes = () => {
    return (
        <Switch>
            {
                links.map((link, index) => {
                    if (
                        link.protectionLevel &&
                        link.protectionLevel !== authStore.authStatus
                    )
                        return <Redirect key={index} to={getLinkPath(linkMap.Login)} />;

                    return <Route key={index} {...link} />;
                })
            }
        </Switch>
    );
};

export default observer(AppRoutes);
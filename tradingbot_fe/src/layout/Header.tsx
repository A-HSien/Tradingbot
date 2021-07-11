import { createClass } from "src/styles";
import { Link } from "react-router-dom";
import { getLinkPath, menus } from "../common/AppRoutes";
import { AuthStatus, authStore } from "src/stores/AuthStore";
import { observer } from "mobx-react";

const styles = {
    root: createClass(
        'bg-white', 'dark:bg-gray-800',
        'py-3', 'px-6',
        'flex', 'justify-between'
    ),
    menus: createClass(
        'flex', 'justify-between',
    ),
    site: createClass(
        'font-bold'
    ),
    menu: createClass(
        'pl-6', //'text-gray-200'
    ),
};


const Component = () => {

    const logout = () => {
        authStore.setAuthStatus(undefined);
    };

    return (
        <div className={styles.root}>
            <div className={styles.menus}>
                <div className={styles.site}>TradingBotttt v.0</div>
                {
                    authStore.authStatus === AuthStatus.Authorized &&
                    menus.map((menu, i) =>
                        <Link
                            key={i}
                            to={getLinkPath(menu)}
                            className={styles.menu}>
                            {menu.lable}
                        </Link>
                    )
                }
            </div>
            {
                authStore.authStatus === AuthStatus.Authorized &&
                <button onClick={logout}>logout</button>
            }
        </div>
    )
}

export default observer(Component);
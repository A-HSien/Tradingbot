import { createClass } from "src/styles";
import { Link } from "react-router-dom";
import { getLinkPath, menus } from "../Manu";
import { AuthStatus, authStore } from "src/stores/AuthStore";
import { observer } from "mobx-react";

const styles = {
    root: createClass(
        'bg-white', 'dark:bg-gray-800',
        'py-3', 'px-6',
        'flex',
        'justify-between'
    ),
    menus: createClass(
        'flex', 'justify-between',
    ),
    site: createClass(
        'font-bold',

    ),
    menu: createClass(
        'pl-6', 'text-gray-200',
    ),
};


const Component = () => {

    const logout = () => {
        authStore.logout();
        window.location.reload();
    };

    return (
        <div className={styles.root}>
            <div className={createClass('w-full', 'flex', 'flex-col', 'sm:flex-row', 'sm:justify-start')}>
                <div className={createClass('flex', 'justify-between')}>
                    <div className={createClass(styles.site)}>TradingBot</div>
                    {
                        authStore.authStatus === AuthStatus.Authorized &&
                        <div className={createClass('sm:hidden')}>
                            <a onClick={logout} href="/">logout</a>
                        </div>
                    }
                </div>
                <div className={styles.menus}>
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
            </div>
            {
                authStore.authStatus === AuthStatus.Authorized &&
                <div className={createClass('hidden', 'sm:block')}>
                    <span className={createClass('text-gray-400', 'pr-3')}>
                        {authStore.email}
                    </span>
                    <a onClick={logout} href="/">logout</a>
                </div>
            }
        </div>
    )
}

export default observer(Component);
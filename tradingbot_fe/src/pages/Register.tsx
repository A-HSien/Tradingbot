import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { linkMap, getLinkPath } from "src/common/AppRoutes";
import { AuthStatus, authStore } from "src/stores/AuthStore";
import { createClass, buttonStyle } from "src/styles";
import { useMemo } from "react";

const styles = {
    root: createClass(
        'm-16', 'p-16', 'border', 'rounded',
        'bg-gray-700', 'text-gray-900'
    ),
};

const Register = () => {

    const code = useMemo(() => Cookies.get('register-code'), []);

    const register = () => {
        fetch('/auth/register',
            {
                body: JSON.stringify(
                    { code }
                ),
                cache: 'no-cache',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
            }
        ).then((resp) => {
            alert(resp);
            authStore.setAuthStatus(AuthStatus.Authorized);
        });
    };

    if (Cookies.get('auth-token'))
        return <Redirect push to={getLinkPath(linkMap.Accounts)} />;


    if (!code)
        return <Redirect push to={getLinkPath(linkMap.Login)} />;

    return (
        <div className={styles.root}>
            <button className={buttonStyle} onClick={register}>註冊</button>
        </div >
    );
};


export default observer(Register);
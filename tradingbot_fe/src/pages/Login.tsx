import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getLinkPath, linkMap } from "src/Manu";
import { AuthStatus, authStore } from "src/stores/AuthStore";
import baseStyles, { createClass } from "src/styles";

const styles = {
    root: createClass(
        'm-16', 'p-16',
    )
};

const Login = () => {

    const [authUrl, setAuthUrl] = useState('');

    useEffect(() => {
        if (!authStore.authStatus)
            fetch('/auth/url')
                .then(resp => resp.text())
                .then(url => {
                    setAuthUrl(url);
                });
    }, []);

    if (authStore.authStatus === AuthStatus.Authenticated)
        return <Redirect push to={getLinkPath(linkMap.Register)} />;

    if (authStore.authStatus === AuthStatus.Authorized)
        return <Redirect push to={getLinkPath(linkMap.Accounts)} />;

    return (
        <div className={styles.root}>
            <a className={baseStyles.buttonStyle} href={authUrl}>登入</a>
        </div >
    );
};


export default observer(Login);
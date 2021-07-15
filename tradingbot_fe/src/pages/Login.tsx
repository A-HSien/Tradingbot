import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getLinkPath, linkMap } from "src/common/AppRoutes";
import { AuthStatus, authStore } from "src/stores/AuthStore";
import { createClass, buttonStyle } from "src/styles";

const styles = {
    root: createClass(
        'm-16', 'p-16', 'border', 'rounded',
        'bg-gray-700', 'text-gray-900'
    )
};

const Login = () => {

    const [authUrl, setAuthUrl] = useState('');

    useEffect(() => {
        fetch('/auth/url')
            .then(resp => resp.text())
            .then(url => {
                setAuthUrl(url);
            });
    }, []);

    if (authStore.authStatus === AuthStatus.Authenticated)
        return <Redirect push to={getLinkPath(linkMap.Register)} />;

    return (
        <div className={styles.root}>
            <a className={buttonStyle} href={authUrl}>登入</a>
        </div >
    );
};


export default observer(Login);
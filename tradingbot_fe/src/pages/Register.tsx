import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { linkMap, getLinkPath } from "src/Manu";
import baseStyles, { createClass } from "src/styles";
import { useMemo, useState } from "react";
import axios from 'axios';

const styles = {
    root: createClass(
        'm-16', 'p-16',
    ),
};

const Register = () => {

    const token = useMemo(() => Cookies.get('auth-token'), []);
    const [registered, setRegistered] = useState(false);

    const register = () => {
        axios.post('/auth/register')
            .then(() => {
                setRegistered(true);
            });
    };

    if (!token)
        return <Redirect push to={getLinkPath(linkMap.Login)} />;

    if (registered)
        return <Redirect push to={getLinkPath(linkMap.Accounts)} />;

    return (
        <div className={styles.root}>
            <button className={baseStyles.buttonStyle} onClick={register}>註冊</button>
        </div >
    );
};


export default observer(Register);
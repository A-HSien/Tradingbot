import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";
import { linkMap, getLinkPath } from "src/common/AppRoutes";
import { AuthStatus, authStore } from "src/stores/AuthStore";
import { createClass, buttonStyle } from "src/styles";

const styles = {
    root: createClass(
        'm-16', 'p-16', 'border', 'rounded',
        'bg-gray-700', 'text-gray-900'
    ),
};

const Register = () => {
    const register = () => {
        authStore.setAuthStatus(AuthStatus.Authorized);
    };
    
    if (authStore.authStatus === AuthStatus.Authorized)
        return <Redirect push to={getLinkPath(linkMap.Accounts)} />;

    return (
        <div className={styles.root}>
            <form>
                <label>姓名</label><br />
                <input type="text" /><br />
            </form>
            <button className={buttonStyle} onClick={register}>註冊</button>
        </div >
    );
};


export default observer(Register);
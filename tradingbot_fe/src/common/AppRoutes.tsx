import { observer } from "mobx-react";
import { Redirect, Route, Switch } from "react-router-dom";
import { authStore } from "../stores/AuthStore";
import { getLinkPath, linkMap } from "../Manu";



const links = Object.values(linkMap);

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
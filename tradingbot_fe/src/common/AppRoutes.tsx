import { observer } from "mobx-react";
import { Redirect, Route, Switch } from "react-router-dom";
import { authStore } from "../stores/AuthStore";
import { getLinkPath, linkMap } from "../Manu";
import { useMemo } from "react";



const links = Object.values(linkMap);

const AppRoutes = () => {

    const routes = useMemo(() => links.map(
        (link, index) =>
            (
                link.protectionLevel &&
                link.protectionLevel !== authStore.authStatus
            ) ?
                <Route key={index} {...link}><Redirect to={getLinkPath(linkMap.Login)} /></Route> :
                <Route key={index} {...link} />
    ), []);

    return <Switch>{routes}</Switch>;
};

export default observer(AppRoutes);
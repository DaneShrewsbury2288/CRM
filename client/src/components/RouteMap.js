import React, { Component } from "react";

import NewsFeed from "../containers/NewsFeed";
import Inventory from "../containers/Inventory";
import ClientList from "../containers/ClientSmall";
import PurchasingTool from "../containers/PurchasingTool";
import SalesAnalytics from "../containers/SalesAnalytics";
import ManagerTaskAssignment from "../containers/ManagerTaskAssignment";
import SalesTeamAnalytics from "../containers/SalesTeamAnalytics";
import CheckUserMessages from "../containers/CheckUserMessages";
import Discover from "../containers/Discover";
import AddRemoveUsers from "../containers/AddRemoveUsers";
import Permissions from "../containers/Permissions";
import SalesTeamDaily from "../containers/SalesTeamDaily";
import NoMatch from "../containers/NoMatch";
import PrivateRoute from "./PrivateRoute";
import { Switch } from "react-router-dom";

const routes = [
    {
        path: "/",
        component: NewsFeed,
        bitmask: 0b1
    },
    {
        path: "/SalesTeamDaily",
        component: SalesTeamDaily,
        bitmask: 0b10
    },
    {
        path: "/Inventory",
        component: Inventory,
        bitmask: 0b100
    },
    {
        path: "/Clientlist",
        component: ClientList,
        bitmask: 0b1000
    },
    {
        path: "/PurchasingTool",
        component: PurchasingTool,
        bitmask: 0b10000
    },
    {
        path: "/SalesAnalytics",
        component: SalesAnalytics,
        bitmask: 0b100000
    },
    {
        path: "/ManagerTaskAssignment",
        component: ManagerTaskAssignment,
        bitmask: 0b1000000
    },
    {
        path: "/SalesTeamAnalytics",
        component: SalesTeamAnalytics,
        bitmask: 0b10000000
    },
    {
        path: "/CheckUserMessages",
        component: CheckUserMessages,
        bitmask: 0b100000000
    },
    {
        path: "/Discover",
        component: Discover,
        bitmask: 0b1000000000
    },
    {
        path: "/AddRemoveUsers",
        component: AddRemoveUsers,
        bitmask: 0b10000000000
    },
    {
        path: "/Permissions",
        component: Permissions,
        bitmask: 0b100000000000
    }
];

class RouteMap extends Component {

    state = {
        permissions: parseInt(this.props.user.permissions),
    }

    render() {
        return (
            <Switch>
                {routes.map(permission => (
                    this.state.permissions & permission.bitmask
                        ?
                        <PrivateRoute
                            exact path={`${permission.path}`}
                            key={`${permission.path}`}
                            component={permission.component}
                        />
                        :
                        null
                ))}
                <PrivateRoute component={NoMatch} />
            </Switch>
        )
    }
}

export default RouteMap;

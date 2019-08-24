import React, { Component } from "react";

import NewsFeed from "../containers/NewsFeed";
import Inventory from "../containers/Inventory";
import ClientSmall from "../containers/ClientSmall";
import ClientLarge from "../containers/ClientLarge";
import Orders from "../containers/Orders";
import PurchasingTool from "../containers/PurchasingTool";
import SalesAnalytics from "../containers/SalesAnalytics";
import ManagerTaskAssignment from "../containers/ManagerTaskAssignment";
import SalesTeamAnalytics from "../containers/SalesTeamAnalytics";
import MapOfSales from "../containers/MapOfSales";
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
    },
    {
        path: "/SalesTeamDaily",
        component: SalesTeamDaily,
    },
    {
        path: "/Inventory",
        component: Inventory,
    },
    {
        path: "/ClientSmall",
        component: ClientSmall,
    },
    {
        path: "/ClientLarge",
        component: ClientLarge,
    },
    {
        path: "/Orders",
        component: Orders,
    },
    {
        path: "/PurchasingTool",
        component: PurchasingTool,
    },
    {
        path: "/SalesAnalytics",
        component: SalesAnalytics,
    },
    {
        path: "/ManagerTaskAssignment",
        component: ManagerTaskAssignment,
    },
    {
        path: "/SalesTeamAnalytics",
        component: SalesTeamAnalytics,
    },
    {
        path: "/MapOfSales",
        component: MapOfSales,
    },
    {
        path: "/Discover",
        component: Discover,
    },
    {
        path: "/AddRemoveUsers",
        component: AddRemoveUsers,
    },
    {
        path: "/Permissions",
        component: Permissions,
    }
];

class RouteMap extends Component {

    state = {
        permissions: this.props.permissions,
        load: [0],
        routes
    }

    componentDidMount() {
        if (this.state.permissions) {
            var binary = this.state.permissions.toString(2)
            var permissions = binary.split('').reverse()
            var permissionsArray = []
            for (var i = 0; i < permissions.length; i++) {
                if (parseInt(permissions[i])) {
                    permissionsArray.push(i);
                }
            }
            this.setState({ load: permissionsArray }, () => {
            });
        }
    }

    render() {
        return (
            <Switch>
                {this.state.load.map(permission => (
                    <PrivateRoute
                        exact path={`${this.state.routes[permission].path}`}
                        key={`${this.state.routes[permission].path}`}
                        component={this.state.routes[permission].component}
                    />
                ))}
                <PrivateRoute component={NoMatch} />
            </Switch>
        )
    }
}

export default RouteMap;

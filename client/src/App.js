import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";



import NewsFeed from "./containers/NewsFeed";
import Inventory from "./containers/Inventory";
import ClientSmall from "./containers/ClientSmall";
import ClientLarge from "./containers/ClientLarge";
import Orders from "./containers/Orders";
import PurchasingTool from "./containers/PurchasingTool";
import SalesAnalytics from "./containers/SalesAnalytics";
import ManagerTaskAssignment from "./containers/ManagerTaskAssignment";
import SalesTeamAnalytics from "./containers/SalesTeamAnalytics";
import MapOfSales from "./containers/MapOfSales";
import Discover from "./containers/Discover";
import AddRemoveUsers from "./containers/AddRemoveUsers";
import Permissions from "./containers/Permissions";
import SalesTeamDaily from "./containers/SalesTeamDaily";
import NoMatch from "./containers/NoMatch";

const routes = [
    {
        path: "/",
        component: NewsFeed,
    },
    {
        path: "/NewsFeed",
        component: NewsFeed,
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
    },
    {
        path: "/SalesTeamDaily",
        component: SalesTeamDaily,
    },
];

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Dashboard>
                            <Switch>
                                {routes.map(({ path, component: C }) => (
                                    <Route
                                        exact path={path}
                                        render={(props) => <C {...props} />}
                                    />
                                ))}
                                <Route component={NoMatch} />
                            </Switch>
                        </Dashboard>
                    </div>
                </Router>
            </div>
        )
    }
};

export default App;


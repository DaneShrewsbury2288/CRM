import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./containers/Login";

// import CheckLogin from "./containers/CheckLogin";
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

    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/target' />
        }
      }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/Login" component={Login} />
                        <Dashboard>
                            <Switch>
                                {routes.map(({ path, component: C }) => (
                                    <Route
                                        exact path={path}
                                        key={path}
                                        render={(props) => <C {...props} />}
                                    />
                                ))}
                                }
                                    <Route component={NoMatch} />
                            </Switch>
                        </Dashboard>
                    </Switch>
                </Router>
            </div>
        )
    }
};

export default App;

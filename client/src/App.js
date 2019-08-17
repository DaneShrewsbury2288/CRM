import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import NewsFeed from "./containers/Newsfeed/NewsFeed";
import Inventory from "./containers/Inventory/Inventory";
import ClientSmall from "./containers/ClientSmall/ClientSmall";
import ClientLarge from "./containers/ClientLarge/ClientLarge";
import Orders from "./containers/Orders/Orders";
import PurchasingTool from "./containers/PurchasingTool/PurchasingTool";
import SalesAnalytics from "./containers/SalesAnalytics/SalesAnalytics";
import ManagerTaskAssignment from "./containers/ManagerTaskAssignment/ManagerTaskAssignment";
import SalesTeamAnalytics from "./containers/SalesTeamAnalytics/SalesTeamAnalytics";
import MapOfSales from "./containers/MapOfSales/MapOfSales";
import Discover from "./containers/Discover/Discover";
import AddRemoveUsers from "./containers/AddRemoveUsers/AddRemoveUsers";
import Permissions from "./containers/Permissions/Permissions";
import SalesTeamDaily from "./containers/SalesTeamDaily/SalesTeamDaily";
import NoMatch from "./containers/NoMatch/NoMatch";


function App() {
  return (
    <Router>
      <div>
        <Switch >
          <Route exact path="/" component={NewsFeed} />
          <Route exact path="/Inventory" component={Inventory} />
          <Route exact path="/ClientSmall" component={ClientSmall} />
          <Route exact path="/ClientLarge" component={ClientLarge} />
          <Route exact path="/Orders" component={Orders} />
          <Route exact path="/PurchasingTool" component={PurchasingTool} />
          <Route exact path="/SalesAnalytics" component={SalesAnalytics} />
          <Route exact path="/ManagerTaskAssignment" component={ManagerTaskAssignment} />
          <Route exact path="/SalesTeamAnalytics" component={SalesTeamAnalytics} />
          <Route exact path="/MapOfSales" component={MapOfSales} />
          <Route exact path="/Discover" component={Discover} />
          <Route exact path="/AddRemoveUsers" component={AddRemoveUsers} />
          <Route exact path="/Permissions" component={Permissions} />
          <Route exact path="/SalesTeamDaily" component={SalesTeamDaily} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


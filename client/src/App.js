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
import Dashboard from "./components/DashboardTwo";


function App() {
  return (
      <div>
        <Dashboard />
      </div>

  );
}

export default App;

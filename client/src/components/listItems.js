import React from 'react';
import { Link } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import BusinessIcon from '@material-ui/icons/Business';
import PieChartIcon from '@material-ui/icons/PieChart';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import LockIcon from '@material-ui/icons/Lock';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/"/> 
      <ListItemText primary="News Feed" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to="/SalesTeamDaily"/> 
      <ListItemText primary="Sales Team Daily" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/Inventory"/> 
      <ListItemText primary="Inventory" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Client Small" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Client Large" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Purchasing Tool" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Sales Analytics" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Map Of Sales" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PieChartIcon />
      </ListItemIcon>

      <ListItemText primary="Discover" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Manager</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Manager Task Assignment" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Sales Team Analytics" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add/Remove Users" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      <ListItemText primary="Permissions" />
    </ListItem>
  </div>
);
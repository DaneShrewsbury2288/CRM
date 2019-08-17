import React from 'react';

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
      <a href="/">
      <ListItemText primary="News Feed" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <a href="/SalesTeamDaily">
      <ListItemText primary="Sales Team Daily" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>

      <a href="/Inventory">
      <ListItemText primary="Inventory" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <a href="/ClientSmall">
      <ListItemText primary="Client Small" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <a href="/ClientLarge">
      <ListItemText primary="Client Large" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <a href="/Orders">
      <ListItemText primary="Orders" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <a href="/PurchasingTool">
      <ListItemText primary="Purchasing Tool" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <a href="/SalesAnalytics">
      <ListItemText primary="Sales Analytics" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <a href="/MapOfSales">
      <ListItemText primary="Map Of Sales" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PieChartIcon />
      </ListItemIcon>
      <a href="/Discover">
      <ListItemText primary="Discover" />
      </a>
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
      <a href="/ManagerTaskAssignment">
      <ListItemText primary="Manager Task Assignment" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <a href="/SalesTeamAnalytics">
      <ListItemText primary="Sales Team Analytics" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <a href="/AddRemoveUsers">
      <ListItemText primary="Add/Remove Users" />
      </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      <a href="/Permissions">
      <ListItemText primary="Permissions" />
      </a>
    </ListItem>
  </div>
);

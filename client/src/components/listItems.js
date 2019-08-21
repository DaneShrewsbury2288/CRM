import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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

class ListItems extends Component {

  state = {
    permissions: this.props.permissions,
    load: [0],
    icons: [
      {
        title: "News Feed",
        href: "/",
        icon: <LayersIcon />
      },
      {
        title: "Sales Team Daily",
        href: "/salesteamdaily",
        icon: <BarChartIcon />
      },
      {
        title: "Inventory",
        href: "/inventory",
        icon: <DashboardIcon />
      },
      {
        title: "Client Small",
        href: "/clientsmall",
        icon: <ShoppingCartIcon />
      },
      {
        title: "Client Large",
        href: "/clientlarge",
        icon: <PeopleIcon />
      },
      {
        title: "Orders",
        href: "/orders",
        icon: <BusinessIcon />
      },
      {
        title: "Purchasing Tool",
        href: "/purchasingtool",
        icon: <MoneyIcon />
      },
      {
        title: "Sales Analytics",
        href: "/salesanalytics",
        icon: <MoneyIcon />
      },
      {
        title: "Map of Sales",
        href: "/mapofsales",
        icon: <BarChartIcon />
      },
      {
        title: "Discover",
        href: "/discover",
        icon: <PieChartIcon />
      },
      {
        title: "Manager Task Assignment",
        href: "/managertaskassignment",
        icon: <BarChartIcon />
      },
      {
        title: "Sales Team Analytics",
        href: "/salesteamanalytics",
        icon: <MoneyIcon />
      },
      {
        title: "Add/Remove Users",
        href: "/addremoveusers",
        icon: <PersonAddIcon />
      },
      {
        title: "Permissions",
        href: "/Permissions",
        icon: <LockIcon />
      }

    ]

  }

  componentDidMount() {
    console.log("mounted")
    var permissions = this.state.permissions.split('').reverse()
    var permissionsArray = []
    for (var i = 0; i < permissions.length; i++) {
      if (parseInt(permissions[i])) {
        permissionsArray.push(i);
        console.log("pushed");
      }
    }
    console.log(permissionsArray);
    this.setState({ load: permissionsArray }, () => {

    });
  }

  render() {
    return (
      <div>
        {this.state.load.map(permission => (
          <Link to={`${this.state.icons[permission].href}`}>
            <ListItem button>
              <ListItemIcon>
                {this.state.icons[permission].icon}
              </ListItemIcon>
              <ListItemText primary={`${this.state.icons[permission].title}`} />
            </ListItem>
          </Link>
        ))}
      </div>
    )
  }
}

export default ListItems;

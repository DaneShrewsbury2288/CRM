import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
import { logoutUser } from "../actions/authActions";

const icons = [
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

class ListMap extends Component {

    state = {
        permissions: this.props.permissions,
        load: [0],
        icons

    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

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
            <div>
                {this.state.load.map(permission => (
                    <Link
                        to={`${this.state.icons[permission].href}`}
                        key={`${this.state.icons[permission].href}`}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                {this.state.icons[permission].icon}
                            </ListItemIcon>
                            <ListItemText primary={`${this.state.icons[permission].title}`} />
                        </ListItem>
                    </Link>
                ))}
                <button
                    style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                    Logout
                </button>
            </div>
        )
    }
}

ListMap.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(ListMap);
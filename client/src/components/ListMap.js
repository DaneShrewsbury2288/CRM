import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import MoneyIcon from '@material-ui/icons/AttachMoney';
import LockIcon from '@material-ui/icons/Lock';
import PublicIcon from '@material-ui/icons/Public';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { logoutUser } from "../actions/authActions";

const icons = [
    {
        title: "Dashboard",
        href: "/",
        bitmask: 0b1,
        icon: <DashboardIcon />
    },
    {
        title: "Sales Team Daily",
        href: "/salesteamdaily",
        bitmask: 0b10,
        icon: <CheckBoxIcon />
    },
    {
        title: "Inventory",
        href: "/inventory",
        bitmask: 0b100,
        icon: <AssignmentIcon />
    },
    {
        title: "Client List",
        href: "/clientlist",
        bitmask: 0b1000,
        icon: <ContactMailIcon />
    },
    {
        title: "Purchasing Tool",
        href: "/purchasingtool",
        bitmask: 0b10000,
        icon: <ShoppingCartIcon />
    },
    {
        title: "Sales Analytics",
        href: "/salesanalytics",
        bitmask: 0b100000,
        icon: <MoneyIcon />
    },
    {
        title: "Manager Task Assignment",
        href: "/managertaskassignment",
        bitmask: 0b1000000,
        icon: <BarChartIcon />
    },
    {
        title: "Sales Team Analytics",
        href: "/salesteamanalytics",
        bitmask: 0b10000000,
        icon: <MoneyIcon />
    },
    {
        title: "Check User Messages",
        href: "/checkusermessages",
        bitmask: 0b100000000,
        icon: <MailOutlineIcon />
    },
    {
        title: "Discover",
        href: "/discover",
        bitmask: 0b1000000000,
        icon: <PublicIcon />
    },
    {
        title: "Add/Remove Users",
        href: "/addremoveusers",
        bitmask: 0b10000000000,
        icon: <PersonAddIcon />
    },
    {
        title: "Permissions",
        href: "/Permissions",
        bitmask: 0b1000000000000,
        icon: <LockIcon />
    }

]

class ListMap extends Component {

    state = {
        permissions: parseInt(this.props.permissions)

    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        return (
            <div>

                {icons.map(permission => (
                    this.state.permissions & permission.bitmask
                        ?
                        <Link
                            to={`${permission.href}`}
                            key={`${permission.href}`}
                        >
                            <ListItem button>
                                <ListItemIcon>
                                    {permission.icon}
                                </ListItemIcon>
                                <ListItemText primary={`${permission.title}`} />
                            </ListItem>
                        </Link>
                        :
                        null
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
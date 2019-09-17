import React from "react";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import WidgetsIcon from '@material-ui/icons/Widgets';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import BarChartIcon from '@material-ui/icons/BarChart';
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockIcon from '@material-ui/icons/Lock';
import PublicIcon from '@material-ui/icons/Public';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NewsFeed from "./containers/NewsFeed";
import Inventory from "./containers/Inventory";
import InventorySupplies from './containers/InventorySupplies'
import ClientList from "./containers/ClientList";
import PurchasingTool from "./containers/PurchasingTool";
import ManagerTaskAssignment from "./containers/ManagerTaskAssignment";
import Analytics from "./containers/Analytics";
import CheckUserMessages from "./containers/CheckUserMessages";
import Discover from "./containers/Discover";
import AddRemoveUsers from "./containers/AddRemoveUsers";
import Permissions from "./containers/Permissions";
import SalesTeamDaily from "./containers/SalesTeamDaily";

const style = {
    icon: {
        color: '#f1f1f1'
    }
}

const icons = [
    {
        title: "Dashboard",
        href: "/",
        bitmask: 0b1,
        component: NewsFeed,
        icon: <DashboardIcon style={style.icon}/>
    },
    {
        title: "Sales Team Daily",
        href: "/salesteamdaily",
        bitmask: 0b10,
        component: SalesTeamDaily,
        icon: <CheckBoxIcon style={style.icon}/>
    },
    {
        title: "Inventory",
        href: "/inventory",
        bitmask: 0b100,
        component: Inventory,
        icon: <WidgetsIcon style={style.icon}/>
    },
    {
        title: "Inventory Supplies",
        href: "/inventorysupplies",
        bitmask: 0b1000,
        component: InventorySupplies,
        icon: <LocalFloristIcon style={style.icon}/>
    },
    {
        title: "Client List",
        href: "/clientlist",
        bitmask: 0b10000,
        component: ClientList,
        icon: <ContactMailIcon style={style.icon}/>
    },
    {
        title: "Purchasing Tool",
        href: "/purchasingtool",
        bitmask: 0b100000,
        component: PurchasingTool,
        icon: <ShoppingCartIcon style={style.icon}/>
    },
    {
        title: "Manager Task Assignment",
        href: "/managertaskassignment",
        bitmask: 0b10000000,
        component: ManagerTaskAssignment,
        icon: <AssignmentTurnedInIcon style={style.icon}/>
    },
    {
        title: "Analytics",
        href: "/analytics",
        bitmask: 0b100000000,
        component: Analytics,
        icon: <BarChartIcon style={style.icon}/>
    },
    {
        title: "Check User Messages",
        href: "/checkusermessages",
        bitmask: 0b1000000000,
        component: CheckUserMessages,
        icon: <MailOutlineIcon style={style.icon}/>
    },
    {
        title: "Discover",
        href: "/discover",
        bitmask: 0b10000000000,
        component: Discover,
        icon: <PublicIcon style={style.icon}/>
    },
    {
        title: "Add/Remove Users",
        href: "/addremoveusers",
        bitmask: 0b100000000000,
        component: AddRemoveUsers,
        icon: <PersonAddIcon style={style.icon}/>
    },
    {
        title: "Permissions",
        href: "/Permissions",
        bitmask: 0b1000000000000,
        component: Permissions,
        icon: <LockIcon style={style.icon}/>
    }
]

export default icons;
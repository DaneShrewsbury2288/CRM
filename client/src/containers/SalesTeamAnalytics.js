import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import Grid from '@material-ui/core/Grid';
import API from '../utilities/api';
import UserAPI from '../utils/API';
import Card from "../components/Card";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
// import moment from "moment";

class SalesTeamAnalytics extends Component {
    state = {
        users: [],
        clients: [],
        tasks: [],
        orders: []
    }
    UNSAFE_componentWillMount() {
        this.checkUsers();
        this.checkTasks();
        this.checkClients();
        this.checkOrders();
    }
    // get tasks
    checkTasks = () => {
        API.getTasks()
            .then(res =>
                this.setState({ tasks: res.data.tasks })
            )
            .catch(error => console.log("Check tasks error: " + error))
    }
    // get users
    checkUsers = () => {
        UserAPI.getUsers()
            .then(res =>
                this.setState({ users: res.data })
            )
            .catch(error => console.log("Check users error: " + error))
    }
    // get all clients
    checkClients = () => {
        API.getClients()
            .then(res =>
                this.setState({ clients: res.data.clients })
            )
            .catch(error => console.log("Check task clients: " + error))
    }
    // get all orders
    checkOrders = () => {
        API.getOrders()
            .then(res =>
                this.setState({ orders: res.data.orders })
            )
    }
    checkState = () => {
        const orders = this.state.orders;
        console.log(orders[2]);
        const users = this.state.users;
        this.startDate(users[2].created_at)
    }
    // create user full name
    fullName = (first, last) => {
        if (first && last) {
            return first + " " + last;
        } else {
            return ""
        }
    }
    // convert start date
    startDate = (date) => {
        const dateOne = date.slice(0, 10);
        const splitDate = dateOne.split('-');
        const month = splitDate[1].toString()
        switch (month) {
            case "01":
                return "Jan. " + splitDate[2] + ", " + splitDate[0];
                break;
            case "02":
                return "Feb. " + splitDate[2] + ", " + splitDate[0];
                break;
            case "03":
                return "Mar. " + splitDate[2] + ", " + splitDate[0];
                break;
            case "04":
                return "Apr. " + splitDate[2] + ", " + splitDate[0];
                break;
            case "05":
                return "May " + splitDate[2] + ", " + splitDate[0];
                break;
            case "06":
                return "Jun. " + splitDate[2] + ", " + splitDate[0];
                break;
            case "07":
                return "Jul. " + splitDate[2] + ", " + splitDate[0];
                break;
            case "08":
                return "Aug. " + splitDate[2] + ", " + splitDate[0];
                break;
            case "09":
                return "Sep. " + splitDate[2] + ", " + splitDate[0];
                break;
            case "10":
                return "Oct. " + splitDate[2] + ", " + splitDate[0];
                break;
            case "11":
                return "Nov. " + splitDate[2] + ", " + splitDate[0];
                break;
            case "12":
                return "Dec. " + splitDate[2] + ", " + splitDate[0];
                break;
            default:
                return null;
        }

    }

    // agent comparison

    render() {
        return (
            <div>
                <button onClick={this.checkState}>Check State</button>
                <PageTitle title="Sales Team Analytics" />
                <div className="user-search">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Find employee"
                        classes={{
                            root: "inputRoot",
                            input: "inputInput",
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <Grid container spacing={4}>
                    <Grid item lg={12}>
                        <h1 className="team-analytics-cards">Sales Team</h1>
                    </Grid>

                    {this.state.users.map(user => (
                        <div>
                            <Grid item lg={12}>
                                <Card
                                    key={user._id}
                                    fullName={this.fullName(user.firstName, user.lastName)}
                                    startDate={this.startDate(user.created_at)}
                                />
                            </Grid>
                        </div>
                    ))}
                </Grid>

            </div>

        )
    }
};

export default SalesTeamAnalytics;
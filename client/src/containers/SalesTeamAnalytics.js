import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import Grid from '@material-ui/core/Grid';
import API from '../utilities/api';
import UserAPI from '../utils/API';
import Card from "../components/Card";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import orderData from "../components/JSON/MockOrders";
import PacmanLoader from 'react-spinners/PacmanLoader';

class SalesTeamAnalytics extends Component {
    state = {
        users: [],
        clients: [],
        tasks: [],
        orders: [],
        dataLoaded: true,
        userNumberOfSales: 0,
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
            .catch(error => console.log("Check users error: " + error));
    }
    // get all clients
    checkClients = () => {
        API.getClients()
            .then(res =>
                this.setState({ clients: res.data.clients })
            )
            .catch(error => console.log("Check task clients: " + error));
    }
    // get all orders
    checkOrders = () => {
        this.setState({ orders: orderData.orders });
    }
    checkState = () => {
        const userID = this.state.users[0]._id;
        console.log(userID);
        // const clients = this.state.clients;
        // console.log(clients.length);
        // const tasks = this.state.tasks;
        // console.log(tasks.length);
        // const orders = this.state.orders;
        // console.log(orders);
        this.numberOfSales(userID);
    }
    checkTotal = () => {
        const total = this.state.userNumberOfSales;
        console.log(total);
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
    // calculate number of sales for each user
    numberOfSales = (userID) => {
        let total = this.state.userNumberOfSales;
        const orders = this.state.orders;
        orders.forEach((order) => {
            if (order.user[0]._id === userID) {
                this.setState({ userNumberOfSales: total + 1 })
                console.log(order.user[0]._id + " : " + userID)
            }

        })
        // this.numberOfSales = this.numberOfSales.bind(this);
        // for (let i = 0; i < orders.length; i++) {
        //     if (orders[i].user[0]._id === userID) {
        //         // how many times it matches
        //         let x = 0;
        //         x += 1;
        //         console.log(orders[i].user[0]._id + " : " + userID);
        //         console.log("user matched to order");

        //     }
        // }
    }

    render() {
        return (
            <div>
                <button onClick={this.checkState}>Check State</button>
                <button onClick={this.checkTotal}>Check Total</button>
                <PageTitle title="Sales Team Analytics" />
                <div className="user-search">
                    <div className="search-icon">
                        <SearchIcon
                        // on click search for employee and display modal of employee information
                        // datamuse populated with employee names?
                        />
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
                    {this.state.orders.length > 0 &&
                        this.state.users.length > 0 &&
                        this.state.clients.length > 0 &&
                        this.state.tasks.length > 0 ?
                        (
                            <div>
                                {this.state.users.map(user => (
                                    <div key={user._id}>
                                        <Grid item lg={12}>
                                            <Card
                                                fullName={this.fullName(user.firstName, user.lastName)}
                                                startDate={this.startDate(user.created_at)}
                                            />
                                        </Grid>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Grid container>
                                <Grid item lg={5}></Grid>
                                <Grid item lg={2}>
                                    <PacmanLoader
                                        className={"pacman-loader"}
                                        sizeUnit={"px"}
                                        size={25}
                                        color={'#9E0031'}
                                        loading={true}
                                    />
                                </Grid>
                                <Grid item lg={5}></Grid>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        )
    }
};

export default SalesTeamAnalytics;
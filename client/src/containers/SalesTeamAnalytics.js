import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import Grid from '@material-ui/core/Grid';
import API from '../utilities/api';
import TeamAnalytics from '../utilities/teamAnalytics';
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
        products: [],
        dataLoaded: true,
        userNumberOfSales: 0,
        productPrice: 0,
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
            .catch(error => console.log("Check clients error: " + error));
    }
    // get all products
    checkProducts = () => {
        API.getProducts()
            .then(res =>
                this.setState({ products: res.data })
            )
            .catch(error => console.log("Check products error: " + error));
    }
    // get all orders
    checkOrders = () => {
        this.setState({ orders: orderData.orders });
    }
    checkState = () => {
        const userID = this.state.users[0]._id;
        // console.log(userID);
        // const clients = this.state.clients;
        // console.log(clients.length);
        // const tasks = this.state.tasks;
        // console.log(tasks.length);
        // const orders = this.state.orders;
        // console.log(orders);
        this.userRevenue(userID);
        // this.getProductPrice("5d6574318debf3d6cb3e549d");
    }
    checkTotal = () => {
        const total = this.state.userNumberOfSales;
        console.log(total);
        const price = this.state.productPrice;
        console.log(price);
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
        const orders = this.state.orders;
        let counter = [];
        orders.forEach(order => {
            if (order.user[0]._id === userID) {
                counter.push(userID);
            }
        });
        this.setState({ userNumberOfSales: counter.length });
    }
    // calculate total revenue generate for each user
    userRevenue = (userID) => {
        const orders = this.state.orders;
        let itemsInOrders = [];
        let prices = [];
        let quantities = [];
        // let productTotals = [];
        orders.forEach(order => {
            if (order.user[0]._id === userID) {
                itemsInOrders.push(order.lineItems);
            }
        });
        itemsInOrders.forEach(item => {
            for (let i = 0; i < item.length; i++) {
                API.getProduct(item[i]._id)
                    .then(res =>
                        prices.push(res.data.price)
                        // console.log(res.data.price)
                    )
                    .catch(error => console.log(error));
                quantities.push(item[i].quantity);
            }
        });
        // for (let i = 0; i < prices.length; i++) {
        //     console.log('hi');
        //     // console.log(quantities[u]);
        //     // console.log(prices[u]);
        //     // productTotals.push(prices[u] * quantities[u]);
        // }
        console.log(prices);
        console.log(quantities);
        // console.log(productTotals);
    }
    getProductPrice = (id) => {
        API.getProduct(id)
            .then(res =>
                this.setState({ productPrice: res.data.price })
            )
            .catch(error => console.log(error));
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
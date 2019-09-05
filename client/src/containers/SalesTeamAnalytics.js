import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import Grid from '@material-ui/core/Grid';
import API from '../utilities/api';
// import TeamAnalytics from '../utilities/teamAnalytics';
import UserAPI from '../utils/API';
import Card from "../components/Card";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import orderData from "../components/JSON/MockOrders";
import PacmanLoader from 'react-spinners/PacmanLoader';
import Modal from '../components/TeamModal';
import Search from '../components/TeamSearch';

class SalesTeamAnalytics extends Component {
    state = {
        users: [],
        clients: [],
        tasks: [],
        orders: [],
        products: [],
        dataLoaded: true,
        productPrice: 0,
        open: false,
        search: "",
        searchedUser: [],
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
        this.userMostSoldProduct();
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
        return counter.length
        // this.setState({ userNumberOfSales: counter.length });
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
    userMostSoldProduct = () => {
        const orders = this.state.orders;
        const users = this.state.users;
        orders.forEach(order => {
            console.log(order)
        })
        // match order user id to user id
        // get all lineItems
        // combine duplicates
        // add up product quantities for each item
    }

    // handle input change
    handleInputChange = (event) => {
        this.setState({
            search: event.target.value
        });
    }
    searchAndModal = event => {
        this.handleFormSubmit(event);
        this.modalOpen();
    }
    handleFormSubmit = event => {
        event.preventDefault();
        let users = this.state.users;
        const result = users.filter(user =>
            (user.firstName + " " + user.lastName).toUpperCase() === this.state.search.toUpperCase()
        );
        this.setState({ searchedUser: result });
    };
    modalOpen = () => {
        this.setState({ open: true });
    }
    modalClose = () => {
        this.setState({ open: false });
    }


    render() {
        return (
            <div>
                <button onClick={this.checkState}>Console log values</button>
                <button onClick={this.modalOpen}>Open Modal</button>
                <PageTitle title="Sales Team Analytics" />
                <Grid container>
                    <Grid item lg={4}></Grid>
                    <Grid item lg={4}>
                        <Search
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.searchAndModal}
                        />
                    </Grid>
                    <Grid item lg={4}></Grid>
                </Grid>
                <div>
                    {this.state.searchedUser.map(user => (
                        <Modal
                            key={user._id}
                            open={this.state.open}
                            onClose={this.modalClose}
                            fullName={this.fullName(user.firstName, user.lastName)}
                            startDate={this.startDate(user.created_at)}
                            numSales={this.numberOfSales(user._id)}
                        />
                    ))}

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
                                                // totalSales={this.userRevenue(user._id)}
                                                numSales={this.numberOfSales(user._id)}
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
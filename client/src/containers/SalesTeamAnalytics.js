import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import Grid from '@material-ui/core/Grid';
import API from '../utilities/api';
import UserAPI from '../utils/API';
import Card from "../components/Card";
import PacmanLoader from 'react-spinners/PacmanLoader';
import Modal from '../components/TeamModal';
import Search from '../components/TeamSearch';
import moment from "moment";
import { Bar } from "react-chartjs-2";
import 'chartjs-plugin-lineheight-annotation';


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
        userRevenue: [],
        // hours
        twentyFourHourDifference: moment().subtract(24, 'hours').format("HH:mm"),
        twentyOneHourDifference: moment().subtract(21, 'hours').format("HH:mm"),
        eightteenHourDifference: moment().subtract(18, 'hours').format("HH:mm"),
        fifteenHourDifference: moment().subtract(15, 'hours').format("HH:mm"),
        twelveHourDifference: moment().subtract(12, 'hours').format("HH:mm"),
        nineHourDifference: moment().subtract(9, 'hours').format("HH:mm"),
        sixHourDifference: moment().subtract(6, 'hours').format("HH:mm"),
        threeHourDifference: moment().subtract(3, 'hours').format("HH:mm"),
        zeroHourDifference: moment().format("HH:mm"),
        // days
        sevenDayDifference: moment().subtract(7, 'days').format("MMM D"),
        sixDayDifference: moment().subtract(6, 'days').format("MMM D"),
        fiveDayDifference: moment().subtract(5, 'days').format("MMM D"),
        fourDayDifference: moment().subtract(4, 'days').format("MMM D"),
        threeDayDifference: moment().subtract(3, 'days').format("MMM D"),
        twoDayDifference: moment().subtract(2, 'days').format("MMM D"),
        oneDayDifference: moment().subtract(1, 'days').format("MMM D"),
        zeroDayDifference: moment().subtract(0, 'days').format("MMM D"),
        // weeks
        weekDifference: moment().subtract(7, 'days').format("MMM D"),
        twoWeekDifference: moment().subtract(14, 'days').format("MMM D"),
        threeWeekDifference: moment().subtract(21, 'days').format("MMM D"),
        fourWeekDifference: moment().subtract(28, 'days').format("MMM D"),
        // past quarter
        quarterTwoDifference: moment().subtract(14, 'days').format("MMM D"),
        quarterFourDifference: moment().subtract(28, 'days').format("MMM D"),
        quarterSixDifference: moment().subtract(42, 'days').format("MMM D"),
        quarterEightDifference: moment().subtract(56, 'days').format("MMM D"),
        quarterTenDifference: moment().subtract(70, 'days').format("MMM D"),
        quarterTwelveDifference: moment().subtract(84, 'days').format("MMM D"),
        // months
        oneMonthDifference: moment().subtract(1, 'months').format("MMM YYYY"),
        twoMonthDifference: moment().subtract(2, 'months').format("MMM YYYY"),
        threeMonthDifference: moment().subtract(3, 'months').format("MMM YYYY"),
        fourMonthDifference: moment().subtract(4, 'months').format("MMM YYYY"),
        fiveMonthDifference: moment().subtract(5, 'months').format("MMM YYYY"),
        sixMonthDifference: moment().subtract(6, 'months').format("MMM YYYY"),
        sevenMonthDifference: moment().subtract(7, 'months').format("MMM YYYY"),
        eightMonthDifference: moment().subtract(8, 'months').format("MMM YYYY"),
        nineMonthDifference: moment().subtract(9, 'months').format("MMM YYYY"),
        tenMonthDifference: moment().subtract(10, 'months').format("MMM YYYY"),
        elevenMonthDifference: moment().subtract(11, 'months').format("MMM YYYY"),
        twelveMonthDifference: moment().subtract(12, 'months').format("MMM YYYY"),

        timeFrame: "yearly",
        timeIncrements: [],
        chartData: [],
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
                {
                    label: "Example One",
                    backgroundColor: "rgba(255, 0, 255, 0.75)",
                    data: [4, 1, 2, 24, 32, 2, 12]
                },
                {
                    label: "Example Two",
                    backgroundColor: "rgba(0, 255, 0, 0.75)",
                    data: [14, 1, 21, 13, 12, 7, 15]
                }
            ]
        }
    }


    getAnalytics = (start, end) => {
        API.getBusinessAnalytics(start, end)
            .then(res =>
                this.setState(state => {
                    const chartData = state.chartData.concat(res.data[0]);
                    return {
                        chartData
                    };
                })
            )
            .catch(error => console.log("Business analytics error: " + error));
    }

    UNSAFE_componentWillMount() {
        this.checkUsers();
        this.checkTasks();
        this.checkClients();
        this.checkOrders();
        this.setTimeFrame();
    }

    setTimeFrame() {
        const timeFrame = this.state.timeFrame;
        if (timeFrame === "hourly") {
            this.setState({
                timeIncrements: [
                    this.state.twentyFourHourDifference,
                    this.state.twentyOneHourDifference,
                    this.state.eightteenHourDifference,
                    this.state.fifteenHourDifference,
                    this.state.twelveHourDifference,
                    this.state.nineHourDifference,
                    this.state.sixHourDifference,
                    this.state.threeHourDifference,
                    this.state.zeroHourDifference,
                ],
                chartData: [],
            })
            const one = moment().subtract(24, 'hours').format("YYYY-MM-DDTHH:mm:ss");
            const two = moment().subtract(21, 'hours').format("YYYY-MM-DDTHH:mm:ss");
            const three = moment().subtract(18, 'hours').format("YYYY-MM-DDTHH:mm:ss");
            const four = moment().subtract(15, 'hours').format("YYYY-MM-DDTHH:mm:ss");
            const five = moment().subtract(12, 'hours').format("YYYY-MM-DDTHH:mm:ss");
            const six = moment().subtract(9, 'hours').format("YYYY-MM-DDTHH:mm:ss");
            const seven = moment().subtract(6, 'hours').format("YYYY-MM-DDTHH:mm:ss");
            const eight = moment().subtract(3, 'hours').format("YYYY-MM-DDTHH:mm:ss");
            const today = moment().format("YYYY-MM-DD");
            this.getAnalytics(one, two);
            this.getAnalytics(two, three);
            this.getAnalytics(three, four);
            this.getAnalytics(four, five);
            this.getAnalytics(five, six);
            this.getAnalytics(six, seven);
            this.getAnalytics(seven, eight);
            this.getAnalytics(eight, today);
        }
        if (timeFrame === "daily") {
            this.setState({
                timeIncrements: [
                    this.state.sevenDayDifference,
                    this.state.sixDayDifference,
                    this.state.fiveDayDifference,
                    this.state.fourDayDifference,
                    this.state.threeDayDifference,
                    this.state.twoDayDifference,
                    this.state.oneDayDifference,
                    this.state.zeroDayDifference,
                ],
                chartData: [],
            })
            const one = moment().subtract(7, 'days').format("YYYY-MM-DD");
            const two = moment().subtract(6, 'days').format("YYYY-MM-DD");
            const three = moment().subtract(5, 'days').format("YYYY-MM-DD");
            const four = moment().subtract(4, 'days').format("YYYY-MM-DD");
            const five = moment().subtract(3, 'days').format("YYYY-MM-DD");
            const six = moment().subtract(2, 'days').format("YYYY-MM-DD");
            const seven = moment().subtract(1, 'days').format("YYYY-MM-DD");
            const today = moment().format("YYYY-MM-DD");
            this.getAnalytics(one, two);
            this.getAnalytics(two, three);
            this.getAnalytics(three, four);
            this.getAnalytics(four, five);
            this.getAnalytics(five, six);
            this.getAnalytics(six, seven);
            this.getAnalytics(seven, today);
        }
        if (timeFrame === "weekly") {
            this.setState({
                timeIncrements: [
                    this.state.weekDifference,
                    this.state.twoWeekDifference,
                    this.state.threeWeekDifference,
                    this.state.fourWeekDifference,
                ],
                chartData: [],
            })
            const one = moment().subtract(28, 'days').format("YYYY-MM-DD");
            const two = moment().subtract(21, 'days').format("YYYY-MM-DD");
            const three = moment().subtract(14, 'days').format("YYYY-MM-DD");
            const four = moment().subtract(7, 'days').format("YYYY-MM-DD");
            const today = moment().format("YYYY-MM-DD");
            this.getAnalytics(one, two);
            this.getAnalytics(two, three);
            this.getAnalytics(three, four);
            this.getAnalytics(four, today);
        }
        if (timeFrame === "monthly") {
            this.setState({
                timeIncrements: [
                    this.state.quarterTwoDifference,
                    this.state.quarterFourDifference,
                    this.state.quarterSixDifference,
                    this.state.quarterEightDifference,
                    this.state.quarterTenDifference,
                    this.state.quarterTwelveDifference,
                ],
                chartData: [],
            })
            const one = moment().subtract(84, 'days').format("YYYY-MM-DD");
            const two = moment().subtract(70, 'days').format("YYYY-MM-DD");
            const three = moment().subtract(56, 'days').format("YYYY-MM-DD");
            const four = moment().subtract(42, 'days').format("YYYY-MM-DD");
            const five = moment().subtract(28, 'days').format("YYYY-MM-DD");
            const six = moment().subtract(14, 'days').format("YYYY-MM-DD");
            const today = moment().format("YYYY-MM-DD");
            this.getAnalytics(one, two);
            this.getAnalytics(two, three);
            this.getAnalytics(three, four);
            this.getAnalytics(four, five);
            this.getAnalytics(five, six);
            this.getAnalytics(six, today);
        }
        if (timeFrame === "yearly") {
            this.setState({
                timeIncrements: [
                    this.state.oneMonthDifference,
                    this.state.twoMonthDifference,
                    this.state.threeMonthDifference,
                    this.state.fourMonthDifference,
                    this.state.fiveMonthDifference,
                    this.state.sixMonthDifference,
                    this.state.sevenMonthDifference,
                    this.state.eightMonthDifference,
                    this.state.nineMonthDifference,
                    this.state.tenMonthDifference,
                    this.state.elevenMonthDifference,
                    this.state.twelveMonthDifference,
                ],
                chartData: [],
            })
            const one = moment().subtract(12, 'months').format("YYYY-MM-DD");
            const two = moment().subtract(11, 'months').format("YYYY-MM-DD");
            const three = moment().subtract(10, 'months').format("YYYY-MM-DD");
            const four = moment().subtract(9, 'months').format("YYYY-MM-DD");
            const five = moment().subtract(8, 'months').format("YYYY-MM-DD");
            const six = moment().subtract(7, 'months').format("YYYY-MM-DD");
            const seven = moment().subtract(6, 'months').format("YYYY-MM-DD");
            const eight = moment().subtract(5, 'months').format("YYYY-MM-DD");
            const nine = moment().subtract(4, 'months').format("YYYY-MM-DD");
            const ten = moment().subtract(3, 'months').format("YYYY-MM-DD");
            const eleven = moment().subtract(2, 'months').format("YYYY-MM-DD");
            const twelve = moment().subtract(1, 'months').format("YYYY-MM-DD");
            const today = moment().format("YYYY-MM-DD");
            this.getAnalytics(one, two);
            this.getAnalytics(two, three);
            this.getAnalytics(three, four);
            this.getAnalytics(four, five);
            this.getAnalytics(five, six);
            this.getAnalytics(six, seven);
            this.getAnalytics(seven, eight);
            this.getAnalytics(eight, nine);
            this.getAnalytics(nine, ten);
            this.getAnalytics(ten, eleven);
            this.getAnalytics(eleven, twelve);
            this.getAnalytics(twelve, today);
        }
    }

    // get tasks
    checkTasks = () => {
        API.getTasks()
            .then(res =>
                this.setState({ tasks: res.data.tasks })
            )
            .catch(error => console.log("Check tasks error: " + error))
    }
    // get user total revenue
    getUserTotalRevenue = (id, start, end) => {
        if (!start) {
            start = moment().subtract(12, 'months').format("YYYY-MM-DD");
        }
        if (!end) {
            end = moment().format("YYYY-MM-DD");
        }
        API.getUserOrderAnalytics(id, start, end)
            .then(res => {
                let total = res.data[0].profit.toFixed(2);
                let totalString = total.toString();
                this.setState(state => {
                    const userRevenue = state.userRevenue.concat(totalString);
                    return {
                        userRevenue
                    };
                })
            }
            )
            .catch(error => console.log("User revenue error: " + error))
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
        API.getOrders()
            .then(res =>
                this.setState({ orders: res.data.orders })
            )
            .catch(error => console.log("Check orders error: " + error));
    }
    checkState = () => {
        // this.getUserTotalRevenue("5d618f75691b892e385e7757");
        // this.numberOfSales("5d618f75691b892e385e7757");
        console.log("state of user revenue: " + this.state.userRevenue);
    }
    // create user full name
    fullName = (first, last) => {
        if (first && last) {
            return first + " " + last;
        } else {
            return "";
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
            case "02":
                return "Feb. " + splitDate[2] + ", " + splitDate[0];
            case "03":
                return "Mar. " + splitDate[2] + ", " + splitDate[0];
            case "04":
                return "Apr. " + splitDate[2] + ", " + splitDate[0];
            case "05":
                return "May " + splitDate[2] + ", " + splitDate[0];
            case "06":
                return "Jun. " + splitDate[2] + ", " + splitDate[0];
            case "07":
                return "Jul. " + splitDate[2] + ", " + splitDate[0];
            case "08":
                return "Aug. " + splitDate[2] + ", " + splitDate[0];
            case "09":
                return "Sep. " + splitDate[2] + ", " + splitDate[0];
            case "10":
                return "Oct. " + splitDate[2] + ", " + splitDate[0];
            case "11":
                return "Nov. " + splitDate[2] + ", " + splitDate[0];
            case "12":
                return "Dec. " + splitDate[2] + ", " + splitDate[0];
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
        return counter.length;
    }
    // add default if user does not have a profile picutre
    checkUserImage = user => {
        for (let i = 0; i < user.length; i++) {
            if (user[i].image) {
                return user[i].image;
            } else {
                return "https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80";
            }
        }
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

    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext("2d");
        console.log(ctx);
        // as values increase, color adjusts, keep below height value
        const gradient = ctx.createLinearGradient(0, 0, 0, 350);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133, 255, 144, 0.85");
        return gradient;
    }

    getChartData = canvas => {
        const data = this.state.data;
        if (data.datasets) {
            let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidth = 2;
                // set.hoverBackgroundColor
            })
        }
        return data;
    }


    render() {
        return (
            <div>
                <button onClick={this.checkState}>Console log values</button>
                <PageTitle title="Sales Team Analytics" />
                <div style={{ position: "relative", width: 962, height: 750 }}>
                    <h3>Chart Sample</h3>
                    <Bar
                        options={{
                            responsive: true,
                            lineHeightAnnotation: {
                                always: false,
                                hover: true,
                                color: "white",
                                // noDash: true
                            }
                        }}
                        data={this.getChartData}
                    />
                </div>
                {/* <Grid container>
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
                            userImage={this.checkUserImage(user)}
                            fullName={this.fullName(user.firstName, user.lastName)}
                            startDate={this.startDate(user.created_at)}
                            // totalSales={this.getUserTotalRevenue(user._id)}
                            numSales={this.numberOfSales(user._id)}
                        // lastMonthSales={this.lastMonthSales(user._id)}
                        // popularProduct={this.userMostSoldProduct(user._id)}
                        />
                    ))}

                </div> */}
                {/* <Grid container spacing={4}>
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
                                                userImage={this.checkUserImage(user)}
                                                fullName={this.fullName(user.firstName, user.lastName)}
                                                startDate={this.startDate(user.created_at)}
                                                // totalSales={this.getUserTotalRevenue(user._id)}
                                                numSales={this.numberOfSales(user._id)}
                                            // lastMonthSales={this.lastMonthSales(user._id)}
                                            // popularProduct={this.userMostSoldProduct(user._id)}
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
                </Grid> */}
            </div>
        )
    }
};

export default SalesTeamAnalytics;
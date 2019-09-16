import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import Grid from '@material-ui/core/Grid';
import API from '../utilities/api';
import UserAPI from '../utils/API';
import Button from '../components/Button';
import "react-chartjs-2";
import BarChart from '../components/BarChart';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Card from "../components/Card";
import PacmanLoader from 'react-spinners/PacmanLoader';
import Modal from '../components/TeamModal';
import Search from '../components/TeamSearch';
import moment from "moment";


class SalesTeamAnalytics extends Component {
    state = {
        users: [],
        userSelection: [],
        clients: [],
        clientSelection: [],
        orders: [],
        open: false,
        search: "",
        searchedUser: [],
        userRevenue: [],
        analyticsSelection: "Business",
        clientOrUserSelection: "",
        // hours
        twentyFourHourDifference: moment().subtract(24, 'hours').format("ddd, hA"),
        twentyOneHourDifference: moment().subtract(21, 'hours').format("ddd, hA"),
        eightteenHourDifference: moment().subtract(18, 'hours').format("ddd, hA"),
        fifteenHourDifference: moment().subtract(15, 'hours').format("ddd, hA"),
        twelveHourDifference: moment().subtract(12, 'hours').format("ddd, hA"),
        nineHourDifference: moment().subtract(9, 'hours').format("ddd, hA"),
        sixHourDifference: moment().subtract(6, 'hours').format("ddd, hA"),
        threeHourDifference: moment().subtract(3, 'hours').format("ddd, hA"),
        zeroHourDifference: moment().format("ddd, hA"),
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
        currentMonth: moment().startOf('month').format("MMM YYYY"),
        oneMonthDifference: moment().subtract(1, 'months').startOf('month').format("MMM YYYY"),
        twoMonthDifference: moment().subtract(2, 'months').startOf('month').format("MMM YYYY"),
        threeMonthDifference: moment().subtract(3, 'months').startOf('month').format("MMM YYYY"),
        fourMonthDifference: moment().subtract(4, 'months').startOf('month').format("MMM YYYY"),
        fiveMonthDifference: moment().subtract(5, 'months').startOf('month').format("MMM YYYY"),
        sixMonthDifference: moment().subtract(6, 'months').startOf('month').format("MMM YYYY"),
        sevenMonthDifference: moment().subtract(7, 'months').startOf('month').format("MMM YYYY"),
        eightMonthDifference: moment().subtract(8, 'months').startOf('month').format("MMM YYYY"),
        nineMonthDifference: moment().subtract(9, 'months').startOf('month').format("MMM YYYY"),
        tenMonthDifference: moment().subtract(10, 'months').startOf('month').format("MMM YYYY"),
        elevenMonthDifference: moment().subtract(11, 'months').startOf('month').format("MMM YYYY"),
        twelveMonthDifference: moment().subtract(12, 'months').startOf('month').format("MMM YYYY"),
        target: 20,
        timeFrame: "Past Month",
        data: {
            // time frame values
            labels: [],
            datasets: [
                {
                    // label for time frame
                    label: "",
                    backgroundColor: "",
                    // data results
                    data: []
                }
            ]
        },
        chartTitle: "",
        timeFrames: [],
        chartBGColor: "",
        chartData: [],
        chartIsLoaded: false,
        totalSales: [],
        averageOrderQuantity: [],
        averageOrderTotal: [],
        largestOrderTotal: [],
        lowestOrderTotal: [],
        blackRavenCount: 0,
        hopsPotatoCount: 0,
        sizzleCiderCount: 0,
        soundsPugetCount: 0,
        extraFoamCount: 0,
        krakenCount: 0,
        samsBeerCount: 0,
    }

    getAnalytics = (start, end) => {
        API.getBusinessAnalytics(start, end)
            .then(res =>
                this.setState(state => {
                    // if any sales have occured in selected time period
                    if (res.data[0] !== undefined) {
                        let total = res.data[0].profit.toFixed(2);
                        let totalString = total.toString();
                        const totalSales = state.totalSales.concat(totalString);
                        let avgOrderTotal = res.data[0].averageOrderTotal.toFixed(2);
                        let avgOrderString = avgOrderTotal.toString();
                        const averageOrderTotal = state.averageOrderTotal.concat(avgOrderString);
                        let avgOrderQuantity = Math.round(res.data[0].averageOrderQuantity);
                        let avgQuantityString = avgOrderQuantity.toString();
                        const averageOrderQuantity = state.averageOrderQuantity.concat(avgQuantityString);
                        let largestTotal = res.data[0].largestOrderTotal.toFixed(2);
                        let largestString = largestTotal.toString();
                        const largestOrderTotal = state.largestOrderTotal.concat(largestString);
                        let lowestTotal = res.data[0].lowestOrderTotal.toFixed(2);
                        let lowestString = lowestTotal.toString();
                        const lowestOrderTotal = state.lowestOrderTotal.concat(lowestString);
                        return {
                            totalSales,
                            averageOrderTotal,
                            averageOrderQuantity,
                            largestOrderTotal,
                            lowestOrderTotal
                        };
                    } else {
                        // set to zero if no sales
                        const noSale = "0.00";
                        const totalSales = state.totalSales.concat(noSale);
                        const averageOrderTotal = state.averageOrderTotal.concat(noSale);
                        const averageOrderQuantity = state.averageOrderQuantity.concat(noSale);
                        const largestOrderTotal = state.largestOrderTotal.concat(noSale);
                        const lowestOrderTotal = state.lowestOrderTotal.concat(noSale);
                        return {
                            totalSales,
                            averageOrderTotal,
                            averageOrderQuantity,
                            largestOrderTotal,
                            lowestOrderTotal
                        };
                    }
                })
            )
            .catch(error => console.log("Business analytics error: " + error));
    }
    getUserAnalytics = (start, end) => {
        const id = this.state.userSelection;
        API.getUserOrderAnalytics(id, start, end)
            .then(res =>
                this.setState(state => {
                    // if any sales have occured in selected time period
                    if (res.data[0] !== undefined) {
                        let total = res.data[0].profit.toFixed(2);
                        let totalString = total.toString();
                        const totalSales = state.totalSales.concat(totalString);
                        let avgOrderTotal = res.data[0].averageOrderTotal.toFixed(2);
                        let avgOrderString = avgOrderTotal.toString();
                        const averageOrderTotal = state.averageOrderTotal.concat(avgOrderString);
                        let avgOrderQuantity = Math.round(res.data[0].averageOrderQuantity);
                        let avgQuantityString = avgOrderQuantity.toString();
                        const averageOrderQuantity = state.averageOrderQuantity.concat(avgQuantityString);
                        let largestTotal = res.data[0].largestOrderTotal.toFixed(2);
                        let largestString = largestTotal.toString();
                        const largestOrderTotal = state.largestOrderTotal.concat(largestString);
                        let lowestTotal = res.data[0].lowestOrderTotal.toFixed(2);
                        let lowestString = lowestTotal.toString();
                        const lowestOrderTotal = state.lowestOrderTotal.concat(lowestString);
                        return {
                            totalSales,
                            averageOrderTotal,
                            averageOrderQuantity,
                            largestOrderTotal,
                            lowestOrderTotal
                        };
                    } else {
                        // set to zero if no sales
                        const noSale = "0.00";
                        const totalSales = state.totalSales.concat(noSale);
                        const averageOrderTotal = state.averageOrderTotal.concat(noSale);
                        const averageOrderQuantity = state.averageOrderQuantity.concat(noSale);
                        const largestOrderTotal = state.largestOrderTotal.concat(noSale);
                        const lowestOrderTotal = state.lowestOrderTotal.concat(noSale);
                        return {
                            totalSales,
                            averageOrderTotal,
                            averageOrderQuantity,
                            largestOrderTotal,
                            lowestOrderTotal
                        };
                    }
                })
            )
            .catch(error => console.log("User analytics error: " + error));
    }
    getClientAnalytics = (start, end) => {
        const id = this.state.clientSelection;
        API.getClientOrderAnalytics(id, start, end)
            .then(res =>
                this.setState(state => {
                    // if any sales have occured in selected time period
                    if (res.data[0] !== undefined) {
                        let total = res.data[0].profit.toFixed(2);
                        let totalString = total.toString();
                        const totalSales = state.totalSales.concat(totalString);
                        let avgOrderTotal = res.data[0].averageOrderTotal.toFixed(2);
                        let avgOrderString = avgOrderTotal.toString();
                        const averageOrderTotal = state.averageOrderTotal.concat(avgOrderString);
                        let avgOrderQuantity = Math.round(res.data[0].averageOrderQuantity);
                        let avgQuantityString = avgOrderQuantity.toString();
                        const averageOrderQuantity = state.averageOrderQuantity.concat(avgQuantityString);
                        let largestTotal = res.data[0].largestOrderTotal.toFixed(2);
                        let largestString = largestTotal.toString();
                        const largestOrderTotal = state.largestOrderTotal.concat(largestString);
                        let lowestTotal = res.data[0].lowestOrderTotal.toFixed(2);
                        let lowestString = lowestTotal.toString();
                        const lowestOrderTotal = state.lowestOrderTotal.concat(lowestString);
                        return {
                            totalSales,
                            averageOrderTotal,
                            averageOrderQuantity,
                            largestOrderTotal,
                            lowestOrderTotal
                        };
                    } else {
                        // set to zero if no sales
                        const noSale = "0.00";
                        const totalSales = state.totalSales.concat(noSale);
                        const averageOrderTotal = state.averageOrderTotal.concat(noSale);
                        const averageOrderQuantity = state.averageOrderQuantity.concat(noSale);
                        const largestOrderTotal = state.largestOrderTotal.concat(noSale);
                        const lowestOrderTotal = state.lowestOrderTotal.concat(noSale);
                        return {
                            totalSales,
                            averageOrderTotal,
                            averageOrderQuantity,
                            largestOrderTotal,
                            lowestOrderTotal
                        };
                    }
                })
            )
            .catch(error => console.log("Client analytics error: " + error));
    }

    UNSAFE_componentWillMount() {
        this.checkUsers();
        this.checkClients();
        this.checkOrders();
    }
    componentDidMount() {
        this.setTimeFrame();
    }

    getLastDayAnalytics = () => {
        this.setState({
            totalSales: [],
            averageOrderQuantity: [],
            averageOrderTotal: [],
            largestOrderTotal: [],
            lowestOrderTotal: [],
        });
        const one = moment().subtract(24, 'hours').format("YYYY-MM-DDTHH:mm:ss");
        const two = moment().subtract(21, 'hours').format("YYYY-MM-DDTHH:mm:ss");
        const three = moment().subtract(18, 'hours').format("YYYY-MM-DDTHH:mm:ss");
        const four = moment().subtract(15, 'hours').format("YYYY-MM-DDTHH:mm:ss");
        const five = moment().subtract(12, 'hours').format("YYYY-MM-DDTHH:mm:ss");
        const six = moment().subtract(9, 'hours').format("YYYY-MM-DDTHH:mm:ss");
        const seven = moment().subtract(6, 'hours').format("YYYY-MM-DDTHH:mm:ss");
        const eight = moment().subtract(3, 'hours').format("YYYY-MM-DDTHH:mm:ss");
        const today = moment().format("YYYY-MM-DDTHH:mm:ss");
        if (this.state.analyticsSelection === "Employee") {
            this.getUserAnalytics(one, two);
            this.getUserAnalytics(two, three);
            this.getUserAnalytics(three, four);
            this.getUserAnalytics(four, five);
            this.getUserAnalytics(five, six);
            this.getUserAnalytics(six, seven);
            this.getUserAnalytics(seven, eight);
            this.getUserAnalytics(eight, today);
        }
        if (this.state.analyticsSelection === "Client") {
            this.getClientAnalytics(one, two);
            this.getClientAnalytics(two, three);
            this.getClientAnalytics(three, four);
            this.getClientAnalytics(four, five);
            this.getClientAnalytics(five, six);
            this.getClientAnalytics(six, seven);
            this.getClientAnalytics(seven, eight);
            this.getClientAnalytics(eight, today);
        }
        if (this.state.analyticsSelection === "Business") {
            this.getAnalytics(one, two);
            this.getAnalytics(two, three);
            this.getAnalytics(three, four);
            this.getAnalytics(four, five);
            this.getAnalytics(five, six);
            this.getAnalytics(six, seven);
            this.getAnalytics(seven, eight);
            this.getAnalytics(eight, today);
        }
    }

    getLastWeekAnalytics = () => {
        const one = moment().subtract(7, 'days').format("YYYY-MM-DD");
        const two = moment().subtract(6, 'days').format("YYYY-MM-DD");
        const three = moment().subtract(5, 'days').format("YYYY-MM-DD");
        const four = moment().subtract(4, 'days').format("YYYY-MM-DD");
        const five = moment().subtract(3, 'days').format("YYYY-MM-DD");
        const six = moment().subtract(2, 'days').format("YYYY-MM-DD");
        const seven = moment().subtract(1, 'days').format("YYYY-MM-DD");
        const eight = moment().startOf('day').format("YYYY-MM-DD");
        const currentTime = moment().format("YYYY-MM-DDTHH:mm:ss");
        if (this.state.analyticsSelection === "Employee") {
            this.getUserAnalytics(one, two);
            this.getUserAnalytics(two, three);
            this.getUserAnalytics(three, four);
            this.getUserAnalytics(four, five);
            this.getUserAnalytics(five, six);
            this.getUserAnalytics(six, seven);
            this.getUserAnalytics(seven, eight);
            this.getUserAnalytics(eight, currentTime);
        }
        if (this.state.analyticsSelection === "Client") {
            this.getClientAnalytics(one, two);
            this.getClientAnalytics(two, three);
            this.getClientAnalytics(three, four);
            this.getClientAnalytics(four, five);
            this.getClientAnalytics(five, six);
            this.getClientAnalytics(six, seven);
            this.getClientAnalytics(seven, eight);
            this.getClientAnalytics(eight, currentTime);
        }
        if (this.state.analyticsSelection === "Business") {
            this.getAnalytics(one, two);
            this.getAnalytics(two, three);
            this.getAnalytics(three, four);
            this.getAnalytics(four, five);
            this.getAnalytics(five, six);
            this.getAnalytics(six, seven);
            this.getAnalytics(seven, eight);
            this.getAnalytics(eight, currentTime);
        }

    }

    getLastMonthAnalytics = () => {
        const one = moment().subtract(28, 'days').format("YYYY-MM-DD");
        const two = moment().subtract(21, 'days').format("YYYY-MM-DD");
        const three = moment().subtract(14, 'days').format("YYYY-MM-DD");
        const four = moment().subtract(7, 'days').format("YYYY-MM-DD");
        const today = moment().format("YYYY-MM-DD");
        if (this.state.analyticsSelection === "Employee") {
            this.getUserAnalytics(one, two);
            this.getUserAnalytics(two, three);
            this.getUserAnalytics(three, four);
            this.getUserAnalytics(four, today);
        }
        if (this.state.analyticsSelection === "Client") {
            this.getClientAnalytics(one, two);
            this.getClientAnalytics(two, three);
            this.getClientAnalytics(three, four);
            this.getClientAnalytics(four, today);
        }
        if (this.state.analyticsSelection === "Business") {
            this.getAnalytics(one, two);
            this.getAnalytics(two, three);
            this.getAnalytics(three, four);
            this.getAnalytics(four, today);
        }

    }

    getLastQuarterAnalytics = () => {
        const one = moment().subtract(84, 'days').format("YYYY-MM-DD");
        const two = moment().subtract(70, 'days').format("YYYY-MM-DD");
        const three = moment().subtract(56, 'days').format("YYYY-MM-DD");
        const four = moment().subtract(42, 'days').format("YYYY-MM-DD");
        const five = moment().subtract(28, 'days').format("YYYY-MM-DD");
        const six = moment().subtract(14, 'days').format("YYYY-MM-DD");
        const today = moment().format("YYYY-MM-DD");
        if (this.state.analyticsSelection === "Employee") {
            this.getUserAnalytics(one, two);
            this.getUserAnalytics(two, three);
            this.getUserAnalytics(three, four);
            this.getUserAnalytics(four, five);
            this.getUserAnalytics(five, six);
            this.getUserAnalytics(six, today);
        }
        if (this.state.analyticsSelection === "Client") {
            this.getClientAnalytics(one, two);
            this.getClientAnalytics(two, three);
            this.getClientAnalytics(three, four);
            this.getClientAnalytics(four, five);
            this.getClientAnalytics(five, six);
            this.getClientAnalytics(six, today);
        }
        if (this.state.analyticsSelection === "Business") {
            this.getAnalytics(one, two);
            this.getAnalytics(two, three);
            this.getAnalytics(three, four);
            this.getAnalytics(four, five);
            this.getAnalytics(five, six);
            this.getAnalytics(six, today);
        }

    }

    getLastYearAnalytics = () => {
        const one = moment().subtract(12, 'months').startOf('month').format("YYYY-MM-DD");
        const two = moment().subtract(11, 'months').startOf('month').format("YYYY-MM-DD");
        const three = moment().subtract(10, 'months').startOf('month').format("YYYY-MM-DD");
        const four = moment().subtract(9, 'months').startOf('month').format("YYYY-MM-DD");
        const five = moment().subtract(8, 'months').startOf('month').format("YYYY-MM-DD");
        const six = moment().subtract(7, 'months').startOf('month').format("YYYY-MM-DD");
        const seven = moment().subtract(6, 'months').startOf('month').format("YYYY-MM-DD");
        const eight = moment().subtract(5, 'months').startOf('month').format("YYYY-MM-DD");
        const nine = moment().subtract(4, 'months').startOf('month').format("YYYY-MM-DD");
        const ten = moment().subtract(3, 'months').startOf('month').format("YYYY-MM-DD");
        const eleven = moment().subtract(2, 'months').startOf('month').format("YYYY-MM-DD");
        const twelve = moment().subtract(1, 'months').startOf('month').format("YYYY-MM-DD");
        const thisMonth = moment().startOf('month').format("YYYY-MM-DD");
        const today = moment().format("YYYY-MM-DD");
        if (this.state.analyticsSelection === "Employee") {
            this.getUserAnalytics(one, two);
            this.getUserAnalytics(two, three);
            this.getUserAnalytics(three, four);
            this.getUserAnalytics(four, five);
            this.getUserAnalytics(five, six);
            this.getUserAnalytics(six, seven);
            this.getUserAnalytics(seven, eight);
            this.getUserAnalytics(eight, nine);
            this.getUserAnalytics(nine, ten);
            this.getUserAnalytics(ten, eleven);
            this.getUserAnalytics(eleven, twelve);
            this.getUserAnalytics(twelve, thisMonth);
            this.getUserAnalytics(thisMonth, today);
        }
        if (this.state.analyticsSelection === "Client") {
            this.getClientAnalytics(one, two);
            this.getClientAnalytics(two, three);
            this.getClientAnalytics(three, four);
            this.getClientAnalytics(four, five);
            this.getClientAnalytics(five, six);
            this.getClientAnalytics(six, seven);
            this.getClientAnalytics(seven, eight);
            this.getClientAnalytics(eight, nine);
            this.getClientAnalytics(nine, ten);
            this.getClientAnalytics(ten, eleven);
            this.getClientAnalytics(eleven, twelve);
            this.getClientAnalytics(twelve, thisMonth);
            this.getClientAnalytics(thisMonth, today);
        }
        if (this.state.analyticsSelection === "Business") {
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
            this.getAnalytics(twelve, thisMonth);
            this.getAnalytics(thisMonth, today);
        }
    }

    setTimeFrame() {
        this.setState({
            data: {
                labels: [],
                datasets: [
                    {
                        label: "24-hour Profit in $",
                        backgroundColor: "rgba(1,41,95,0.75)",
                        data: []
                    },
                    {
                        label: "Average Order Quantity",
                        backgroundColor: "rgba(66,102,150,0.75)",
                        data: []
                    },
                    {
                        label: "Average Order Total in $",
                        backgroundColor: "rgba(35,84,147,0.75)",
                        data: []
                    },
                    {
                        label: "Largest Order in $",
                        backgroundColor: "rgba(15,119,255,0.75)",
                        data: []
                    },
                    {
                        label: "Lowest Order in $",
                        backgroundColor: "rgba(20,147,252,0.75)",
                        data: []
                    }
                ]
            }
        });
        const timeFrame = this.state.timeFrame;
        this.setState({ target: 20, chartIsLoaded: false });
        if (timeFrame === "Past 24-hours") {
            this.getLastDayAnalytics();
            if (this.state.totalSales.length < 8) {
                this.setState({ target: 7 });
                setTimeout(
                    function () {
                        this.setState(prevState => ({
                            data: {
                                ...prevState.data,
                                labels: [
                                    this.state.twentyFourHourDifference + " - " + this.state.twentyOneHourDifference,
                                    this.state.twentyOneHourDifference + " - " + this.state.eightteenHourDifference,
                                    this.state.eightteenHourDifference + " - " + this.state.fifteenHourDifference,
                                    this.state.fifteenHourDifference + " - " + this.state.twelveHourDifference,
                                    this.state.twelveHourDifference + " - " + this.state.nineHourDifference,
                                    this.state.nineHourDifference + " - " + this.state.sixHourDifference,
                                    this.state.sixHourDifference + " - " + this.state.threeHourDifference,
                                    this.state.threeHourDifference + " - " + this.state.zeroHourDifference,
                                ],
                                datasets: [
                                    {
                                        ...prevState.data.datasets,
                                        label: "24-hour Profit in $",
                                        backgroundColor: "rgba(1,41,95,0.75)",
                                        data: this.state.totalSales
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Average Order Quantity",
                                        backgroundColor: "rgba(66,102,150,0.75)",
                                        data: this.state.averageOrderQuantity
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Average Order Total in $",
                                        backgroundColor: "rgba(35,84,147,0.75)",
                                        data: this.state.averageOrderTotal
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Largest Order in $",
                                        backgroundColor: "rgba(15,119,255,0.75)",
                                        data: this.state.largestOrderTotal
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Lowest Order in $",
                                        backgroundColor: "rgba(20,147,252,0.75)",
                                        data: this.state.lowestOrderTotal
                                    }
                                ]
                            }
                        }))
                        this.setState({ chartIsLoaded: true });
                    }.bind(this), 5000
                )
            }
        }
        else if (timeFrame === "Past Week") {
            this.getLastWeekAnalytics();
            if (this.state.totalSales.length < 8) {
                this.setState({ target: 7 });
                setTimeout(
                    function () {
                        this.setState(prevState => ({
                            data: {
                                ...prevState.data,
                                labels: [
                                    this.state.sevenDayDifference,
                                    this.state.sixDayDifference,
                                    this.state.fiveDayDifference,
                                    this.state.fourDayDifference,
                                    this.state.threeDayDifference,
                                    this.state.twoDayDifference,
                                    this.state.oneDayDifference,
                                    this.state.zeroDayDifference,
                                ],
                                datasets: [
                                    {
                                        ...prevState.data.datasets,
                                        label: "Week Profit in $",
                                        backgroundColor: "rgba(1,41,95,0.75)",
                                        data: this.state.totalSales
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Average Order Quantity",
                                        backgroundColor: "rgba(66,102,150,0.75)",
                                        data: this.state.averageOrderQuantity
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Average Order Total in $",
                                        backgroundColor: "rgba(35,84,147,0.75)",
                                        data: this.state.averageOrderTotal
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Largest Order in $",
                                        backgroundColor: "rgba(15,119,255,0.75)",
                                        data: this.state.largestOrderTotal
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Lowest Order in $",
                                        backgroundColor: "rgba(20,147,252,0.75)",
                                        data: this.state.lowestOrderTotal
                                    }
                                ]
                            }
                        }))
                        this.setState({ chartIsLoaded: true });
                    }.bind(this), 2000
                )
            }
        }
        else if (timeFrame === "Past Month") {
            this.getLastMonthAnalytics();
            if (this.state.totalSales.length < 4) {
                this.setState({ target: 3 });
                setTimeout(
                    function () {
                        this.setState(prevState => ({
                            data: {
                                ...prevState.data,
                                labels: [
                                    this.state.fourWeekDifference + " - " + this.state.threeWeekDifference,
                                    this.state.threeWeekDifference + " - " + this.state.twoWeekDifference,
                                    this.state.twoWeekDifference + " - " + this.state.weekDifference,
                                    this.state.weekDifference + " - " + this.state.zeroDayDifference,
                                ],
                                datasets: [
                                    {
                                        ...prevState.data.datasets,
                                        label: "Month Profit in $",
                                        backgroundColor: "rgba(1,41,95,0.75)",
                                        data: this.state.totalSales
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Average Order Quantity",
                                        backgroundColor: "rgba(66,102,150,0.75)",
                                        data: this.state.averageOrderQuantity
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Average Order Total in $",
                                        backgroundColor: "rgba(35,84,147,0.75)",
                                        data: this.state.averageOrderTotal
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Largest Order in $",
                                        backgroundColor: "rgba(15,119,255,0.75)",
                                        data: this.state.largestOrderTotal
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Lowest Order in $",
                                        backgroundColor: "rgba(20,147,252,0.75)",
                                        data: this.state.lowestOrderTotal
                                    }
                                ]
                            }
                        }))
                        this.setState({ chartIsLoaded: true });
                    }.bind(this), 2000
                )
            }
        }
        else if (timeFrame === "past-quarter") {
            this.getLastQuarterAnalytics();
            if (this.state.totalSales.length < 6) {
                this.setState({ target: 5 });
                setTimeout(
                    function () {
                        this.setState(prevState => ({
                            data: {
                                ...prevState.data,
                                labels: [
                                    this.state.quarterTwelveDifference + " - " + this.state.quarterTenDifference,
                                    this.state.quarterTenDifference + " - " + this.state.quarterEightDifference,
                                    this.state.quarterEightDifference + " - " + this.state.quarterSixDifference,
                                    this.state.quarterSixDifference + " - " + this.state.quarterFourDifference,
                                    this.state.quarterFourDifference + " - " + this.state.quarterTwoDifference,
                                    this.state.quarterTwoDifference + " - " + this.state.zeroDayDifference,
                                ],
                                datasets: [
                                    {
                                        ...prevState.data.datasets,
                                        label: "Quarter Profit in $",
                                        backgroundColor: "rgba(1,41,95,0.75)",
                                        data: this.state.totalSales
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Average Order Quantity",
                                        backgroundColor: "rgba(66,102,150,0.75)",
                                        data: this.state.averageOrderQuantity
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Average Order Total in $",
                                        backgroundColor: "rgba(35,84,147,0.75)",
                                        data: this.state.averageOrderTotal
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Largest Order in $",
                                        backgroundColor: "rgba(15,119,255,0.75)",
                                        data: this.state.largestOrderTotal
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Lowest Order in $",
                                        backgroundColor: "rgba(20,147,252,0.75)",
                                        data: this.state.lowestOrderTotal
                                    }
                                ]
                            }
                        }))
                        this.setState({ chartIsLoaded: true });
                    }.bind(this), 2000
                )
            }
        }
        else if (timeFrame === "Past Year") {
            this.getLastYearAnalytics();
            if (this.state.totalSales.length < 13) {
                this.setState({ target: 12 });
                setTimeout(
                    function () {
                        this.setState(prevState => ({
                            data: {
                                ...prevState.data,
                                labels: [
                                    this.state.twelveMonthDifference,
                                    this.state.elevenMonthDifference,
                                    this.state.tenMonthDifference,
                                    this.state.nineMonthDifference,
                                    this.state.eightMonthDifference,
                                    this.state.sevenMonthDifference,
                                    this.state.sixMonthDifference,
                                    this.state.fiveMonthDifference,
                                    this.state.fourMonthDifference,
                                    this.state.threeMonthDifference,
                                    this.state.twoMonthDifference,
                                    this.state.oneMonthDifference,
                                    this.state.currentMonth + " - " + this.state.zeroDayDifference,
                                ],
                                datasets: [
                                    {
                                        ...prevState.data.datasets,
                                        label: "Year Profit in $",
                                        backgroundColor: "rgba(1,41,95,0.75)",
                                        data: this.state.totalSales
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Average Order Quantity",
                                        backgroundColor: "rgba(66,102,150,0.75)",
                                        data: this.state.averageOrderQuantity
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Average Order Total in $",
                                        backgroundColor: "rgba(35,84,147,0.75)",
                                        data: this.state.averageOrderTotal
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Largest Order in $",
                                        backgroundColor: "rgba(15,119,255,0.75)",
                                        data: this.state.largestOrderTotal
                                    },
                                    {
                                        ...prevState.data.datasets,
                                        label: "Lowest Order in $",
                                        backgroundColor: "rgba(20,147,252,0.75)",
                                        data: this.state.lowestOrderTotal
                                    }
                                ]
                            }
                        }))
                        this.setState({ chartIsLoaded: true });
                    }.bind(this), 2000
                )
            }
        } else {
            return;
        }
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
    // get all orders
    checkOrders = () => {
        API.getOrders()
            .then(res =>
                this.setState({ orders: res.data.orders })
            )
            .catch(error => console.log("Check orders error: " + error));
    }
    checkState = () => {
        console.log(this.state.totalSales);
        console.log(this.state.averageOrderTotal);
        console.log(this.state.averageOrderQuantity);
        console.log(this.state.largestOrderTotal);
        console.log(this.state.lowestOrderTotal);
        // console.log("blackRavenCount: " + this.state.blackRavenCount);
        // console.log("hopsPotatoCount: " + this.state.hopsPotatoCount);
        // console.log("sizzleCiderCount: " + this.state.sizzleCiderCount);
        // console.log("soundsPugetCount: " + this.state.soundsPugetCount);
        // console.log("extraFoamCount: " + this.state.extraFoamCount);
        // console.log("krakenCount: " + this.state.krakenCount);
        // console.log("samsBeerCount: " + this.state.samsBeerCount);
        // for (let i = 0; i < this.state.data.datasets.length; i++) {
        //     console.log(this.state.data.datasets[i].data[0])
        // }
        console.log(this.state.data);
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
    handleInputChange = (event) => {
        this.setState({
            search: event.target.value
        });
    }
    handleDropDownChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
            clientOrUserSelection: value,
        });
    }
    handleUserOrClientChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
        setTimeout(
            function () {
                this.setTimeFrame();
            }.bind(this), 500
        )
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

    set24Hours = () => (event) => {
        event.preventDefault();
        this.setState({
            totalSales: [],
            averageOrderQuantity: [],
            averageOrderTotal: [],
            largestOrderTotal: [],
            lowestOrderTotal: [],
            timeFrame: "Past 24-hours"
        });
        if (this.state.timeFrame === "Past 24-hours") {
            this.setTimeFrame();
        } else {
            setTimeout(
                function () {
                    this.setTimeFrame();
                }.bind(this), 500
            )
        }

    }
    setWeek = () => (event) => {
        event.preventDefault();
        this.setState({
            totalSales: [],
            averageOrderQuantity: [],
            averageOrderTotal: [],
            largestOrderTotal: [],
            lowestOrderTotal: [],
            timeFrame: "Past Week"
        });
        if (this.state.timeFrame === "Past Week") {
            this.setTimeFrame();
        } else {
            setTimeout(
                function () {
                    this.setTimeFrame();
                }.bind(this), 500
            )
        }
    }
    setMonth = () => (event) => {
        event.preventDefault();
        this.setState({
            totalSales: [],
            averageOrderQuantity: [],
            averageOrderTotal: [],
            largestOrderTotal: [],
            lowestOrderTotal: [],
            timeFrame: "Past Month"
        });
        if (this.state.timeFrame === "Past Month") {
            this.setTimeFrame();
        } else {
            setTimeout(
                function () {
                    this.setTimeFrame();
                }.bind(this), 500
            )
        }
    }
    setQuarter = () => (event) => {
        event.preventDefault();
        this.setState({
            totalSales: [],
            averageOrderQuantity: [],
            averageOrderTotal: [],
            largestOrderTotal: [],
            lowestOrderTotal: [],
            timeFrame: "past-quarter"
        });
        if (this.state.timeFrame === "past-quarter") {
            this.setTimeFrame();
        } else {
            setTimeout(
                function () {
                    this.setTimeFrame();
                }.bind(this), 500
            )
        }
    }
    setYear = () => (event) => {
        event.preventDefault();
        this.setState({
            totalSales: [],
            averageOrderQuantity: [],
            averageOrderTotal: [],
            largestOrderTotal: [],
            lowestOrderTotal: [],
            timeFrame: "Past Year"
        });
        if (this.state.timeFrame === "Past Year") {
            this.setTimeFrame();
        } else {
            setTimeout(
                function () {
                    this.setTimeFrame();
                }.bind(this), 500
            )
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.checkState}>Console log values</button>
                <PageTitle title="Sales Team Analytics" />
                <div style={{ position: "relative", width: 962, height: 750 }}>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item lg={5}>
                            <FormControl
                                fullWidth={true}
                            >
                                <InputLabel htmlFor="age-native-helper">Get Analysis</InputLabel>
                                <Select
                                    value={this.state.analyticsSelection}
                                    onChange={this.handleDropDownChange}
                                    name="analyticsSelection"
                                >
                                    <MenuItem value={"Business"}>Business</MenuItem>
                                    <MenuItem value={"Client"}>Client</MenuItem>
                                    <MenuItem value={"Employee"}>Employee</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={2} />
                        {this.state.clientOrUserSelection === "Client" ? (
                            <Grid item lg={5}>
                                <FormControl
                                    fullWidth={true}
                                >
                                    <InputLabel htmlFor="age-native-helper">Client</InputLabel>
                                    <Select
                                        value={this.state.clientSelection}
                                        onChange={this.handleUserOrClientChange}
                                        name="clientSelection"
                                    >
                                        {this.state.clients.map(client => (
                                            <MenuItem key={client._id} value={client._id}>{client.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        ) : (
                                <div />
                            )}
                        {this.state.clientOrUserSelection === "Employee" ? (
                            <Grid item lg={5}>
                                <FormControl
                                    fullWidth={true}
                                >
                                    <InputLabel htmlFor="age-native-helper">Employee</InputLabel>
                                    <Select
                                        value={this.state.userSelection}
                                        onChange={this.handleUserOrClientChange}
                                        name="userSelection"
                                    >
                                        {this.state.users.map(user => (
                                            <MenuItem key={user._id} value={user._id}>{user.firstName} {user.lastName}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        ) : (
                                <div />
                            )}
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ margin: "10px" }}
                    >
                        <Grid item xs={4} sm={2}>
                            <Button
                                buttonAction={this.set24Hours()}
                                buttonName="24-hours"
                            />
                        </Grid>
                        <Grid item xs={4} sm={2}>
                            <Button
                                buttonAction={this.setWeek()}
                                buttonName="Week"
                            />
                        </Grid>
                        <Grid item xs={4} sm={2}>
                            <Button
                                buttonAction={this.setMonth()}
                                buttonName="Month"
                            />
                        </Grid>
                        <Grid item xs={4} sm={2}>
                            <Button
                                buttonAction={this.setQuarter()}
                                buttonName="Quarter"
                            />
                        </Grid>
                        <Grid item xs={4} sm={2}>
                            <Button
                                buttonAction={this.setYear()}
                                buttonName="Year"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        {this.state.totalSales.length > this.state.target && this.state.chartIsLoaded ? (
                            <BarChart
                                data={this.state.data}
                                title={this.state.analyticsSelection}
                                time={this.state.timeFrame}
                            />
                        ) : (
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid item lg={3}></Grid>
                                    <Grid item lg={6}>
                                        <PacmanLoader
                                            className={"pacman-loader"}
                                            sizeUnit={"px"}
                                            size={75}
                                            color={'#9E0031'}
                                            loading={true}
                                        />
                                    </Grid>
                                    <Grid item lg={3}></Grid>
                                </Grid>
                            )}
                    </Grid>
                </div>
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
                            userImage={this.checkUserImage(user)}
                            fullName={this.fullName(user.firstName, user.lastName)}
                            startDate={this.startDate(user.created_at)}
                            // totalSales={this.getUserTotalRevenue(user._id)}
                            numSales={this.numberOfSales(user._id)}
                        // lastMonthSales={this.lastMonthSales(user._id)}
                        // popularProduct={this.userMostSoldProduct(user._id)}
                        />
                    ))}
                </div>
                <Grid container spacing={4}>
                    {this.state.orders.length > 0 &&
                        this.state.users.length > 0 &&
                        this.state.clients.length > 0 ?
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
                </Grid>
            </div>
        )
    }
};

export default SalesTeamAnalytics;
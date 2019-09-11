import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import { withStyles } from '@material-ui/core/styles';
import Chart from "../components/Chart";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import Order from '../components/Order';
import clsx from 'clsx';
import Deposits from '../components/Deposits';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProductProfit from '../components/ProductProfit';
import AggregateSales from '../components/AggregateSales';
import API from '../utilities/api';
import moment from "moment";


const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
});

// function CenteredTabs() {
//     const classes = styles();
//     const [value, setValue] = React.useState(0);

//     function handleChange(onSelect, newValue) {
//         setValue(newValue);
//     };
// };

class SalesAnalytics extends Component {
    state = {
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
        
        timeFrame: "daily",
        timeIncrements: [],
        chartData: [],
    }

    UNSAFE_componentWillMount() {
        this.setTimeFrame();
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
    handleTabChange = (event) => {
        this.setState({
            timeFrame: event.target.value
        });
        this.setTimeFrame();
    }

    checkState = () => {
        console.log("Time frame value");
        console.log(this.state.timeFrame);
        console.log("Time Increments");
        console.log(this.state.timeIncrements);
        console.log("Time frame data");
        console.log(this.state.chartData);
    }

    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

        return (
            <div>
                <button onClick={this.checkState}>Check State</button>
                <PageTitle title="Sales Analytics" />
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper>
                            <Tabs
                                value={this.state.timeFrame}
                                onChange={this.handleTabChange}
                                indicatorColor="primary"
                                textColor="primary"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                                selectedTab={this.state.timeFrame}
                                centered
                            >
                                <Tab label="24 Hours" value="hourly" />
                                <Tab label="Week" value="daily" />
                                <Tab label="Month" value="weekly" />
                                <Tab label="Quarter" value="monthly" />
                                <Tab label="Year" value="yearly" />
                            </Tabs>
                        </Paper>
                        <Paper className={fixedHeightPaper}>
                            <Chart

                            />
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={1} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits />
                        </Paper>
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Tabs
                                //value={CenteredTabs.value}
                                //onChange={CenteredTabs.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                //onSelect={this.handleChange}
                                centered
                            >
                                <Tab label="Aggregate" />
                                <Tab label="Business" />
                                <Tab label="Consumer" >
                                </Tab>
                            </Tabs>
                            <AggregateSales />
                        </Paper>
                    </Grid>

                    {/* Profit per product  */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <ProductProfit />
                        </Paper>
                    </Grid>
                </Grid>
            </div>


        )
    }
};

export default withStyles(styles)(SalesAnalytics);

    // profit per product
    // cost of product
    // Product.findByID({
    //     cost
    // }) => { _id: objectID, Product.cost: cost }
    // price product is sold for
    // Product.findByID({
    //     price
    // }) => { _id: objectID, Product.price: price }
    // length of time not sold
    // cost of holding product / total # of products
    // cost of shipping - shipstation connection?
    // trends
    // total sales in time period
    // date range
    // exclude time less than first date and more than last date
    // Sales.find({
    //     created_at: {
    //         $gte: ISODate("2010-04-29T00:00:00.000Z"),
    //         $lt: ISODate("2010-05-01T00:00:00.000Z")
    //     }
    // })
    // => { "_id" : objectID), "purchases.name" : "product name", "purchase.quantity" : "amount purchased within time period" }
    // save each product to a variable and add to total for each purchase quantity
    // product id
    // product profit
    // product quantity
    // individual product sales in time period
    // areas with most sales
    // zip code heat map (https://www.tableau.com/about/blog/2018/11/density-mark-type-brings-new-kind-heatmap-tableau-98488)

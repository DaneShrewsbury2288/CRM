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
// import API from '../utilities/api';
// import moment from "moment";


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
    
    handleTabChange = (event) => {
        console.log(event.target.value);
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
                                // value={this.state.timeFrame}
                                onChange={this.handleTabChange}

                                indicatorColor="primary"
                                textColor="primary"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                                // selectedTab={this.state.timeFrame}
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

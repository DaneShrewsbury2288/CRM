import React from "react";
import PageTitle from "../components/PageTitle";
// import Example from "../components/ProductChart";
import SalesBreakdown from "../components/SalesBreakdown";
import RevenueCard from "../components/RevenueCard";
import ProductChart from "../components/ProductChart";
// import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 15,
    margin: 50,
    width: 780
  },
  media: {
    width: 100,
    margin: 50,

  },
}));

export default function NewsFeed() {
  const classes = useStyles();
  return (
    <div>
      <PageTitle title="Dashboard" />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ margin: "10px" }}
      >
        <Grid item lg={12}>
          <ProductChart className={classes.media} />
        </Grid>
        <Grid item lg={3}></Grid>
        <Grid item lg={3}>
          <h5>Revenue - Year to Date</h5>
          <RevenueCard className={classes.media} />
        </Grid>
        <Grid item lg={3}>
        <SalesBreakdown />
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
    </div>
  );
}


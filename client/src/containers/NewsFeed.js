import React from "react";
import PageTitle from "../components/PageTitle";
// import Example from "../components/ProductChart";
import SalesBreakdown from "../components/SalesBreakdown";
import RevenueCard from "../components/RevenueCard";
import ProductChart from "../components/ProductChart";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: 700
  },
  media: {
       margin: 50,
    },
}));

export default function NewsFeed() {
  const classes = useStyles();
    return (
        <div>
        <PageTitle title="Dashboard" />
        <Grid container spacing={3}>

          <Grid item xs={12} md={8} lg={9}>
            <Paper className={classes.root}>
              <ProductChart/>
            </Paper>
            
          </Grid>   

            
            <RevenueCard className={classes.media} />
          

        </Grid>

     
        
        <SalesBreakdown />
        
       </div>
    );
  }


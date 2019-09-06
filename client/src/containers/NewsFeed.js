import React from "react";
import PageTitle from "../components/PageTitle";
// import Example from "../components/ProductChart";
import SalesBreakdown from "../components/SalesBreakdown";
import RevenueCard from "../components/RevenueCard";
import ProductChart from "../components/ProductChart";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';


export default function NewsFeed() {
    return (
        <div>
        <PageTitle title="Dashboard" />
        <Grid container spacing={3}>

          <Grid item xs={12} md={8} lg={9}>

            <Paper m={1}>
              <RevenueCard />
            </Paper>
          </Grid>   

          <Paper>
            <ProductChart/>
          </Paper>
        </Grid>

     
        
        <SalesBreakdown />
        
       </div>
    );
  }


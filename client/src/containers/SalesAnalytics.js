import React from "react";
import PageTitle from "../components/PageTitle";

function SalesAnalytics() {
    // profit per product
        // cost of product
        // price product is sold for
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
                // => { "_id" : ObjectId("4c0791e2b9ec877893f3363b"), "name" : "example", "created_at" : "Sun May 30 2010 00:00:00 GMT+0300 (EEST)" }
            // product id
            // product profit
            // product quantity
        // individual product sales in time period
        // areas with most sales
            // zip code heat map (https://www.tableau.com/about/blog/2018/11/density-mark-type-brings-new-kind-heatmap-tableau-98488)

    return (
        <div>
            <PageTitle title="Sales Analytics"/>
        </div>

    )
};

export default SalesAnalytics;

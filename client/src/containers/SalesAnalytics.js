import React from "react";
import PageTitle from "../components/PageTitle";

function SalesAnalytics() {
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

    return (
        <div>
            <PageTitle title="Sales Analytics"/>
        </div>

    )
};

export default SalesAnalytics;

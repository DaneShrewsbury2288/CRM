import React from "react";
import PageTitle from "../components/PageTitle";
import Example from "../components/ProductChart";
import SalesBreakdown from "../components/SalesBreakdown";

export default function NewsFeed() {
    return (
        <div>
        <PageTitle title="News Feed" />
        <Example />
        <SalesBreakdown />
       </div>
    );
  }


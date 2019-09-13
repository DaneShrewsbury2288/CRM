import React from "react";
import PageTitle from "../components/PageTitle";
import Vader from "../images/404.png"

function NoMatch() {
    return (
        <div>
            <PageTitle title="No Match" />
            <div className="image">
                <img alt="vader404" src={Vader} />
            </div>
        </div>
    )
};


export default NoMatch;
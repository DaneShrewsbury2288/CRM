import React from "react";
import "./style.css";
import Vader from "./404.png"

function NoMatch() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="containerNoMatch">
                    <div className="image">
                        <img alt="vader404" src={Vader}>

                        </img>
                    </div>
                </div>

            </div>

        </div>

    )

}

export default NoMatch;
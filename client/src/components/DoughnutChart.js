import React from 'react';
import { Doughnut } from "react-chartjs-2";
import 'chartjs-plugin-lineheight-annotation';

function DoughnutChart(props) {
    if (props.doughnutData !== undefined) {
        return (
            <Doughnut
                options={{
                    responsive: true,
                    legend: {
                        labels: {
                            fontColor: "black",
                            defaultFontFamily: "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'"
                        }
                    },
                }}
                data={props.doughnutData}
            />
        )
    } else {
        return (
            <div />
        )
    }
}
export default DoughnutChart;
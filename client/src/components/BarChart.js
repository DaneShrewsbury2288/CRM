import React from 'react';
import { Bar } from "react-chartjs-2";
import 'chartjs-plugin-lineheight-annotation';

function BarChart(props) {
    return (
        <Bar
            options={{
                responsive: true,
                lineHeightAnnotation: {
                    always: false,
                    hover: true,
                    color: "white",
                }
            }}
            data={props.data}
        />
    )
}
export default BarChart;
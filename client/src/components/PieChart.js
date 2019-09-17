import React from 'react';
import { Pie } from "react-chartjs-2";
import 'chartjs-plugin-lineheight-annotation';

function PieChart(props) {
    console.log(props)
    if (props.pieData !== undefined) {
        return (
            <Pie
                options={{
                    responsive: true,
                    legend: {
                        labels: {
                            fontColor: "black",
                            defaultFontFamily: "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'"
                        }
                    },
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem, data) {
                                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += Math.round(tooltipItem.yLabel * 100) / 100;
                                return label;
                            }
                        }
                    }
                }}
                data={props.pieData}
            />
        )
    } else {
        return (
            <div />
        )
    }
}
export default PieChart;
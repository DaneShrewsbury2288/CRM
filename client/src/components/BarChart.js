import React from 'react';
import { Bar } from "react-chartjs-2";
import 'chartjs-plugin-lineheight-annotation';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Grid from '@material-ui/core/Grid';

function BarChart(props) {
    if (props.data !== undefined) {
        return (
            <Bar
                options={{
                    responsive: true,
                    lineHeightAnnotation: {
                        always: false,
                        hover: true,
                        color: "white",
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: props.title + " Analytics Over " + props.time
                    },
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
                data={props.data}
            />
        )
    } else {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item lg={3}></Grid>
                <Grid item lg={6}>
                    <PacmanLoader
                        className={"pacman-loader"}
                        sizeUnit={"px"}
                        size={75}
                        color={"#313131"}
                        loading={true}
                    />
                </Grid>
                <Grid item lg={3}></Grid>
            </Grid>
        )
    }
}
export default BarChart;
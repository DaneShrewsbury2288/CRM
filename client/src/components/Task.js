import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function TaskTable(props) {
    return (
        <div>
            {/* <Card>
                <CardContent> */}
            <Grid container spacing={3} wrap="nowrap">
                <Grid item xs>
                    <Paper className="paper" wrap="nowrap">Task</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className="paper" wrap="nowrap">Employee Name</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className="paper" wrap="nowrap">Client Name</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} wrap="nowrap">
                <Grid item xs={12}>
                    <Paper className="paper" wrap="nowrap">Description</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} wrap="nowrap">
                <Grid item xs={6}>
                    <Paper className="paper" wrap="nowarp">Time since task was assigned ___</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className="paper" wrap="nowarp">Due is ___ days</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} wrap="nowrap">
                <Grid item xs>
                    <Paper className="paper">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                    </Paper>
                </Grid>
            </Grid>

            {/* </CardContent>
            </Card> */}

        </div>
    )
}

export default TaskTable;
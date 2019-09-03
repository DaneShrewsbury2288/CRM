import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function TaskTable(props) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Grid container spacing={3} wrap="nowrap">
                        <Grid item lg>
                            <Paper className="paper-header">Task</Paper>
                        </Grid>
                        <Grid item lg>
                            <Paper className="paper-headerer">{props.user}</Paper>
                        </Grid>
                        <Grid item lg>
                            <Paper className="paper-headerper">{props.client}</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} wrap="nowrap">
                        <Grid item lg={1}>
                            <Paper className="paper-header">Description</Paper>
                        </Grid>
                        <Grid item lg={11}>
                            <Paper className="paper">{props.description}</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} wrap="nowrap">
                        <Grid item lg={1}>
                            <Paper className="paper-header">Current Status</Paper>
                        </Grid>
                        <Grid item lg={2}>
                            <Paper className="paper">{props.assignedStatus}</Paper>
                        </Grid>
                        <Grid item lg={3}>
                            <Paper className="paper">Time since task was assigned {props.elapsedTime} days ago</Paper>
                        </Grid>
                        <Grid item lg={3}>
                            <Paper className="paper">Due in {props.dueDate} days</Paper>
                        </Grid>
                        <Grid item lg={3}>
                            <Paper className="paper">{props.completionStatus}</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} wrap="nowrap">
                        <Grid item lg={2}>
                            <Paper className="paper-header">
                                Note
                    </Paper>
                        </Grid>
                        <Grid item lg={8}>
                            <Paper className="paper">
                                {props.note}
                    </Paper>
                        </Grid>
                        <Grid item lg={2}>
                            <Button variant="contained" color="secondary" className="button">
                                Delete
                    </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </div>
    )
}

export default TaskTable;
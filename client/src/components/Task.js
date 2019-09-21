import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

function TaskTable(props) {
    return (
        <div>
            <Card style= {{marginTop: '20px', marginBottom: '20px', backgroundColor: '#c5c5c5'}}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item lg>
                            <Paper className="paper-header">Task #{props.taskNumber}</Paper>
                        </Grid>
                        <Grid>
                            <Grid item lg>
                                <ListItemAvatar>
                                    <Avatar alt={props.user} src={props.userImage} />
                                </ListItemAvatar>
                            </Grid>
                        </Grid>
                        <Grid item lg>
                            <Paper className="paper-header">{props.user}</Paper>
                        </Grid>
                        <Grid item lg>
                            <Paper className="paper-headerr">{props.client}</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item lg={2}>
                            <Paper className="paper-header">Description:</Paper>
                        </Grid>
                        <Grid item lg={10}>
                            <Paper className="paper">{props.description}</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item lg={2}>
                            <Paper className="paper-header">Current Status</Paper>
                        </Grid>
                        <Grid item lg={2}>
                            <Paper className="paper">{props.assignedStatus}</Paper>
                        </Grid>
                        <Grid item lg={3}>
                            <Paper className="paper">Task was assigned {props.elapsedTime * -1} days ago</Paper>
                        </Grid>
                        <Grid item lg={3}>
                            <Paper className="paper">Due in {props.dueDate} days</Paper>
                        </Grid>
                        <Grid item lg={3}>
                            <Paper className="paper">{props.completionStatus}</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
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
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </div>
    )
}

export default TaskTable;
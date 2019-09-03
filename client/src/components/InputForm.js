import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

function InputForm(props) {
  return (
    <div>
      <Card>
        <CardContent>
          <form>
            <div className="task-form">
              <Grid container spacing={3}>
                <Grid item lg={4}>
                  <Paper className="paper-header">Create a task</Paper>
                </Grid>
                <Grid item lg={4}>
                  <ClickAwayListener onClickAway={props.userHandleClickAway}>
                    <div>
                      <Button onClick={props.userHandleClick}>{props.userDropDown}</Button>
                      {props.userOpen ? (
                        <div>
                          {props.users.map(user => (
                            <Grid item lg={12}>
                              <Button
                                key={user._id}
                                className="user-selection"
                                value={user._id}
                                onClick={props.userSelection(user._id, user.firstName, user.lastName)}
                              >
                                {user.firstName + " " + user.lastName}
                              </Button>
                            </Grid>

                          ))}
                        </div>
                      ) : null}
                    </div>
                  </ClickAwayListener>
                </Grid>
                <Grid item lg={4}>
                  <ClickAwayListener onClickAway={props.clientHandleClickAway}>
                    <div>
                      <Button onClick={props.clientHandleClick}>{props.clientDropDown}</Button>
                      {props.clientOpen ? (
                        <div>
                          {props.clients.map(client => (
                            <Grid item lg={12}>
                              <Button
                                key={client._id}
                                className="client-selection"
                                value={client._id}
                                onClick={props.userSelection(client._id, client.name)}
                              >
                                {client.name}
                              </Button>
                            </Grid>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </ClickAwayListener>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item lg={12}>
                  <input
                    placeholder="Task description"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item lg={8}></Grid>
                <Grid item lg={2}>
                  <Paper className="paper">Due Date</Paper>
                </Grid>
                <Grid item lg={2}>
                  <Button variant="contained" color="primary" className="button">
                    Submit Task
                  </Button>
                </Grid>
              </Grid>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default InputForm;
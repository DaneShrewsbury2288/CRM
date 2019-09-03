import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const users = [
  {
      "permissions": 16383,
      "note": [],
      "_id": "5d617d25affccb40d8d0195e",
      "firstName": "Honer",
      "lastName": "Devin",
      "userKey": 1,
      "userId": 1,
      "password": "$2a$10$DQ1s904Iu0DjNgtCi1eqXuwx3NTox2kd5bbGp8Tcv5TSVoz5tq16y",
      "__v": 0,
      "created_at": "2019-09-03T05:11:23.734Z"
  },
  {
      "permissions": 16383,
      "note": [],
      "_id": "5d618f75691b892e385e7757",
      "firstName": "Clint",
      "lastName": "Brodar",
      "userKey": 7,
      "userId": 7,
      "password": "$2a$10$IYDkZub0lhLFQhxvP8CYa.b.7wTpY9.dOv6v0AcokZD44MnX6ATsC",
      "__v": 0,
      "created_at": "2019-09-03T05:11:23.734Z"
  },
  {
      "permissions": 8192,
      "note": [],
      "_id": "5d618fb9691b892e385e7758",
      "firstName": "Dane",
      "lastName": "Shrewsbury",
      "userKey": 8,
      "userId": 8,
      "password": "$2a$10$B6j8CJruBhhu1mT2s4bvZ.XMpRBJnbH4M.Fyv7A5ZLBZIjXQQhhc2",
      "__v": 0,
      "created_at": "2019-09-03T05:11:23.734Z"
  },
  {
      "permissions": 16383,
      "note": [],
      "_id": "5d618fce691b892e385e7759",
      "firstName": "Anthony",
      "lastName": "Lam",
      "userKey": 9,
      "userId": 9,
      "password": "$2a$10$f1yHjEpmpJZNQzlbpPnNVu6tPgljuLEyMt4MH8uNYRBnReJWLakJm",
      "__v": 0,
      "created_at": "2019-09-03T05:11:23.734Z"
  }
]


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
                  <ClickAwayListener>
                    <div>
                      <Button onClick={props.userHandleClick}>Assign Employee</Button>
                      {props.userOpen ? (
                        <div>
                          {users.map(user => (
                            <Paper 
                            className="paper" 
                            onClick={console.log(user.firstName + " has been clicked")}
                            key={user._id} 
                            >
                              {user.firstName + " " + user.lastName}
                            </Paper>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </ClickAwayListener>
                </Grid>
                <Grid item lg={4}>
                  <input
                    placeholder="Client"
                  />
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
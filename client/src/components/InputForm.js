import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

function InputForm(props) {
  return (
    <div>
      <Card>
        <CardContent>
          <form>
            <div className="task-form">
              <Grid container spacing={3}>
                <Grid item lg={4}>
                  <InputLabel htmlFor="age-native-helper">Create a Task</InputLabel>
                </Grid>
                <Grid item lg={4}>
                  <FormControl
                    fullWidth={true}
                  >
                    <InputLabel htmlFor="age-native-helper">Employee</InputLabel>
                    <Select
                      value={props.userSelection}
                      onChange={props.handleInputChange}
                      name="userSelection"
                    >
                      {props.users.map(user => (
                        <MenuItem key={user._id} value={user._id}>
                          {user.firstName} {user.lastName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4}>
                  <FormControl
                    fullWidth={true}
                  >
                    <InputLabel htmlFor="age-native-helper">Client</InputLabel>
                    <Select
                      value={props.clientSelection}
                      onChange={props.handleInputChange}
                      name="clientSelection"
                    >
                      {props.clients.map(client => (
                        <MenuItem key={client._id} value={client._id}>
                          {client.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item lg={12}>
                  <Input
                    value={props.description}
                    name="inputDescription"
                    placeholder="Task description"
                    onChange={props.handleInputChange}
                    fullWidth={true}
                    multiline={true}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item lg={4}>
                  <Paper className="paper">Due Date</Paper>
                </Grid>
                <Grid item lg={4}>
                  <Input
                    value={props.dueDate}
                    name="dueDate"
                    placeholder="01-01-2011"
                    onChange={props.handleInputChange}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item lg={2} />
                <Grid item lg={2}>
                  <Button onClick={props.handleFormSubmit} variant="contained" style={{backgroundColor: '#313131'}} color="primary" className="button">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </div>
            {/* <button onClick={props.handleFormSubmit}>Submit</button> */}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default InputForm;
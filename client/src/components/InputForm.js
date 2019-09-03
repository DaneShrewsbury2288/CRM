import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   DatePicker
// } from "material-ui-pickers";

function inputForm(props, button) {
  return (
    <div className="taskInputForm">
      <div className="taskHead">New Task</div>
      <form className="container" noValidate autoComplete="off">
        <FormControl className="formControl">
          {/* Employee selection */}
          <InputLabel htmlFor="user-selection">Employee Name</InputLabel>
          <Select
            value="employee"
            onChange={console.log("value changed")}
            // Attributes applied to the input element
            inputProps={{
              name: 'user',
              id: 'user-selection',
            }}
          >
            {/* Map menu items based on client total? */}
            <MenuItem value="user-one">User One</MenuItem>
            <MenuItem value="user-two">User Two</MenuItem>
            <MenuItem value="user-three">User Three</MenuItem>
            <MenuItem value="user-four">User Four</MenuItem>
            <MenuItem value="user-five">User Five</MenuItem>
            <MenuItem value="user-six">User Six</MenuItem>
          </Select>
          {/* Client name/selection */}
          <InputLabel htmlFor="client-selection">Client Name</InputLabel>
          <Select
            value="client"
            onChange={console.log("value changed")}
            // Attributes applied to the input element
            inputProps={{
              name: 'client',
              id: 'client-selection',
            }}
          >
            {/* Map menu items based on client total? */}
            <MenuItem value="client-one">Client One</MenuItem>
            <MenuItem value="client-two">Client Two</MenuItem>
            <MenuItem value="client-three">Client Three</MenuItem>
            <MenuItem value="client-four">Client Four</MenuItem>
            <MenuItem value="client-five">Client Five</MenuItem>
            <MenuItem value="client-six">Client Six</MenuItem>
          </Select>
          {/* Task description */}
          <TextField
            id="filled-name"
            label="Description"
            value="description"
            name="description"
            onChange={console.log("value changed")}
            margin="normal"
            
          />
          {/* Due date selection */}
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="pickers">
              <DatePicker value={props.selectedDate} onChange={props.handleDateChange} />
            </div>
          </MuiPickersUtilsProvider> */}
          {/* {button} */}
        </FormControl>
      </form>
    </div>
  )
}

export default inputForm;
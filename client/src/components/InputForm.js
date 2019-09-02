import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker
} from "material-ui-pickers";

function inputForm(handleInputChange, userName, userID,clientName, clientID, description, button) {
  return (
    <div className="taskInputForm">
      <div className="taskHead">New Task</div>
      <form className="container" noValidate autoComplete="off">
        <FormControl className="formControl">
          {/* Employee selection */}
          <InputLabel htmlFor="user-selection">{userName}</InputLabel>
          <Select
            value={userID}
            onChange={handleInputChange}
            // Attributes applied to the input element
            inputProps={{
              name: 'user',
              id: 'user-selection',
            }}
          >
            {/* Map menu items based on client total? */}
            <MenuItem value={userName}>User One</MenuItem>
            <MenuItem value={userName}>User Two</MenuItem>
            <MenuItem value={userName}>User Three</MenuItem>
            <MenuItem value={userName}>User Four</MenuItem>
            <MenuItem value={userName}>User Five</MenuItem>
            <MenuItem value={userName}>User Six</MenuItem>
          </Select>
          {/* Client name/selection */}
          <InputLabel htmlFor="client-selection">{clientName}</InputLabel>
          <Select
            value={clientID}
            onChange={handleInputChange}
            // Attributes applied to the input element
            inputProps={{
              name: 'client',
              id: 'client-selection',
            }}
          >
            {/* Map menu items based on client total? */}
            <MenuItem value={clientName}>Client One</MenuItem>
            <MenuItem value={clientName}>Client Two</MenuItem>
            <MenuItem value={clientName}>Client Three</MenuItem>
            <MenuItem value={clientName}>Client Four</MenuItem>
            <MenuItem value={clientName}>Client Five</MenuItem>
            <MenuItem value={clientName}>Client Six</MenuItem>
          </Select>
          {/* Task description */}
          <TextField
            id="filled-name"
            label="Description"
            value={description}
            name="description"
            onChange={handleInputChange}
            margin="normal"
            
          />
          {/* Due date selection */}
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="pickers">
              <DatePicker value={props.selectedDate} onChange={props.handleDateChange} />
            </div>
          </MuiPickersUtilsProvider> */}
          {button}
        </FormControl>
      </form>
    </div>
  )
}

export default inputForm;
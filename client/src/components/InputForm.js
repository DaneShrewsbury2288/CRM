import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields(client, agent, clientEmail, clientPhone, description, potentialValue, industry) {
  const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   name: 'Cat in the Hat',
  //   age: '',
  //   multiline: 'Controlled'
  // });

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="outlined-required"
        label="Client Name"
        placeholder="Client Name"
        className={classes.textField}
        value={client}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Sales Agent"
        placeholder="Assigned Agent Name"
        className={classes.textField}
        value={agent}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        value={clientEmail}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-number"
        label="Phone Number"
        value={clientPhone}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows="4"
        defaultValue={description}
        className={classes.textField}
        value={description}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-number"
        label="Potential Value"
        value={potentialValue}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-full-width"
        label="Industry"
        style={{ margin: 8 }}
        placeholder="What kind of business is this?"
        value={industry}
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PersonIcon from '@material-ui/icons/Person';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import RingVolumeIcon from '@material-ui/icons/RingVolume';
import BusinessIcon from '@material-ui/icons/Business';
import EventIcon from '@material-ui/icons/Event';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

export default function OutlinedTextFields(employee, monthAvg, clients, phone, email, startDate) {
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
            <div>

            </div>
            <PersonIcon />
            <TextField
                required
                id="outlined-required"
                label="Employee Name"
                placeholder="Employee Name"
                className={classes.textField}
                value={employee}
                margin="normal"
                variant="outlined"
            />
            <div>
                <AttachMoneyIcon />
                <TextField
                    required
                    id="outlined-required"
                    label="Monthly Sales Average"
                    className={classes.textField}
                    value={monthAvg}
                    margin="normal"
                    variant="outlined"
                />
            </div>
            <div>
                <BusinessIcon />
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-simple">Clients</InputLabel>
                    <Select
                        value={clients}
                        inputProps={{
                            name: 'Current Clients',
                            id: '',
                        }}
                    >
                        <MenuItem value={clients}>Client One</MenuItem>
                        <MenuItem value={clients}>Client Two</MenuItem>
                        <MenuItem value={clients}>Client Three</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <AlternateEmailIcon />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    className={classes.textField}
                    value={email}
                    margin="normal"
                    variant="outlined"
                />
            </div>
            <div>
                <RingVolumeIcon />
                <TextField
                    required
                    id="outlined-number"
                    label="Phone Number"
                    value={phone}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
            </div>
            <div>
                <EventIcon />
                <TextField
                    id="date"
                    label="Start Date"
                    type="date"
                    defaultValue={startDate}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        </form>
    );
}
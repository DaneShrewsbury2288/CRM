import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utilities/api';
import EnhancedTable from '../components/EditableTable';
import Review from '../components/Review';

const clientArray = [];
const productArray = [];

function PopulateClients(){
  API.getClients()
  .then(res =>
      clientArray.push(res.data)
  )
  .catch(error => console.log("Check clients error: " + error))
}

function PopulateProducts(){
  API.getProducts()
  .then(res =>
      clientArray.push(res.data)
  )
  .catch(error => console.log("Check clients error: " + error))
}

PopulateProducts();
PopulateClients();

console.log(clientArray);
console.log(productArray);

const useStyles = makeStyles(theme => ({
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
  },
}));

export default function ClientInformation() {
  const [clientSelection] = React.useState(clientArray);

  const classes = useStyles();
  const [values, setValues] = React.useState({
    client: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  function seeClient(){
    console.log(values.client)
  }

  return (
    <React.Fragment>
      <button onClick={seeClient}>See Selected Client ID</button>
      <Typography variant="h6" gutterBottom>
        Please Select a Client
      </Typography>
      <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-helper">Client</InputLabel>
        <Select
          value={values.client}
          onChange={handleChange}
          inputProps={{
            name: 'client',
            id: 'age-helper',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'5d6c55ca0ea69bf46a4bb0f7'}>Ajit Pai</MenuItem>
          <MenuItem value={'5d6c53a60ea69bf46a4bb0f0'}>Charles Finley</MenuItem>
          <MenuItem value={'5d6c51940ea69bf46a4bb0eb'}>CostCo</MenuItem>
          <MenuItem value={'5d6c561c0ea69bf46a4bb0f8'}>Enumclaw Expo Center</MenuItem>
          <MenuItem value={'5d6c520b0ea69bf46a4bb0ec'}>Fred Meyer</MenuItem>
          <MenuItem value={'5d6c54480ea69bf46a4bb0f2'}>Gary Grayson</MenuItem>
          <MenuItem value={'5d6c525e0ea69bf46a4bb0ed'}>Joe Plumber</MenuItem>
          <MenuItem value={'5d6c53f20ea69bf46a4bb0f1'}>Julia Matthews</MenuItem>
          <MenuItem value={'5d6c52cd0ea69bf46a4bb0ee'}>Kawhi Leonard</MenuItem>
          <MenuItem value={'5d6c54940ea69bf46a4bb0f3'}>Safeway - Seattle</MenuItem>
        </Select>
      </FormControl>
      </form>
      <EnhancedTable />
      <Review />
    </React.Fragment>
  );
}
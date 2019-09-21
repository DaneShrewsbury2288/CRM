import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utilities/api';
import EnhancedTable from '../components/EditableTable';
import Review from '../components/Review';

const clientArray = [];
// const productArray = [];
export let selectedClient = '';

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

// console.log(clientArray);
// console.log(productArray);

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

export default function ClientInformation(props) {
  // const [clientSelection] = React.useState(clientArray);

  const classes = useStyles();
  const [values, setValues] = React.useState({
    client: ''
  });

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }),
    selectedClient = values
    );

  }

  // function seeClient(){
  //   console.log(values.client)
  // }

  function pushValues(){
    selectedClient = values.client
  }
  
  pushValues();

  return (
    <React.Fragment>
      {/* <button onClick={seeClient}>See Selected Client ID</button> */}
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
          <MenuItem value={'5d6c552c0ea69bf46a4bb0f5'}>Whole Foods Market - Bellevue</MenuItem>
          <MenuItem value={'5d6c54d60ea69bf46a4bb0f4'}>WinCo Foods - Kent</MenuItem>
          <MenuItem value={'5d6c55760ea69bf46a4bb0f6'}>Tifa Lockhart</MenuItem>
          <MenuItem value={'5d6c53150ea69bf46a4bb0ef'}>Thomas Buckley</MenuItem>

        </Select>
      </FormControl>
      </form>
      <EnhancedTable />
      <Review user={props.user} />
    </React.Fragment>
  );
}
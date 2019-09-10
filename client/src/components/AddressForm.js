import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import API from '../utilities/api';

const clientArray = [{}];

function PopulateClients(){
  API.getClients()
  .then(res =>
      clientArray.push(res.data.clients[0])
  )
  .catch(error => console.log("Check clients error: " + error))
}

PopulateClients();
// console.log(clientArray[1].data.clients[0]);
console.log(clientArray);



export default function ClientInformation() {
  const [clientSelection] = React.useState(clientArray);
  // const [count] = React.useState(0);

  // // Similar to componentDidMount and componentDidUpdate:
  // React.useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });

  return (
    <React.Fragment>
PLEASE SELECT A CLIENT 
{/* <FormControl>
                    <InputLabel htmlFor="age-native-helper">Client</InputLabel>
                    <Select
                      value={props.clientSelection}
                      onChange={props.handleInputChange}
                      name="clientSelection"
                    >
                      {props.clients.map(client => (
                        <MenuItem key={client._id} value={client._id}>{client.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl> */}

      <Typography variant="h6" gutterBottom>
        Client Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="businessName"
            name="address1"
            label="Business Name"
            fullWidth
            autoComplete="Business Name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="emailaddress"
            email="email"
            label="Email"
            fullWidth
            autoComplete="email-address-line"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phonenumber"
            phone="phone"
            label="Phone"
            fullWidth
            autoComplete="phone-number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            zipcode="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing-postal-code"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
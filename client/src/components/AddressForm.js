import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';


export default function ClientInformation() {
  const [name, email, phone, zipcode] = React.useState('');
  const [count] = React.useState(0);
  

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });


  return (
    <React.Fragment>
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
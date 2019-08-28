import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Orders from '../components/Orders';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product Selection
      </Typography>
      <Grid container spacing={3}>
        {/* TABLE WITH ABILITY TO INPUT IDS, HOW MANY PURCHASED, PRICE */}
      </Grid>
    </React.Fragment>
  );
}
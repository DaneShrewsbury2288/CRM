import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EditableTable from '../components/EditableTable';
// import MaterialTable from '../components/MaterialTable';


export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product Selection
      </Typography>
      <Grid container spacing={3}>
        <EditableTable />
      </Grid>
    </React.Fragment>
  );
}
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function profileCard(props) {
  return (
    <Card className="card">
      <CardContent>
        <Grid container spacing={5}>
          <Grid item lg={4}>
            <Typography className="title" color="textSecondary" gutterBottom>
              Sales
        </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography variant="h5" component="h2">
              {props.fullName}
        </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography className="pos" color="textSecondary">
              Employed since {props.startDate}
        </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item lg={6}>
            <Typography variant="body2" component="p">
              Total Sales: $1234
          </Typography>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="body2" component="p">
              Average Sale: $12
          </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item lg={4}>
            <Typography variant="body2" component="p">
              Sale Conversion Rate: 33%
          </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography variant="body2" component="p">
              Sales in last 30 days: $123
          </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography variant="body2" component="p">
              Most sold product: Hops-Potato
          </Typography>
          </Grid>
        </Grid>




        <Typography variant="body2" component="p">

        </Typography>
      </CardContent>
    </Card>
  );
}

export default profileCard;

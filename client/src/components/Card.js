import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

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
          <Grid item lg={4}>
            <Typography variant="body2" component="h3">
              Revenue Generated: ${props.totalSales}
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography variant="body2" component="h3">
              <ListItemAvatar>
                <Avatar alt={props.user} src={props.userImage} />
              </ListItemAvatar>
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography variant="body2" component="h3">
              Number of Sales: {props.numSales}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item lg={4}>
            <Typography variant="body2" component="h3">
              Average Sale: ${props.averageSale}
            </Typography>
          </Grid>
          {/* <Grid item lg={4}>
            <Typography variant="body2" component="h3">
              Sales in last 30 days: {props.lastMonthSales}
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography variant="body2" component="h3">
              Most sold product: {props.popularProduct}
            </Typography>
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default profileCard;

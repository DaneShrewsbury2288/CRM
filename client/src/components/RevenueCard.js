import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 125,
    maxWidth: 150,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 1,
  },
});


export default function RevenueCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Total Revenue
      </Typography>
        <Typography variant="h5" component="h2">
          $460.54
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          last 24 hours
        </Typography>
      </CardContent>
    </Card>
  );
}
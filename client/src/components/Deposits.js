/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import moment from "moment";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const now = moment().format('MMMM Do YYYY, h:mm:ss a');;


export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Sales Target</Title>
      <Typography component="h2" variant="h4">
        $34,024.00 <small>of</small> $50,000.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of
        <Title>{now}</Title>
      </Typography>
      <div>
        <Link color="primary" href="/clientlist">
          View Clients
        </Link>
      </div>
    </React.Fragment>
  );
}
/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import API from '../utilities/api';

// Generate Order Data
// function createData(id, _id, productName, quantity, price, total) {
//   return { id, _id, productName, quantity, price, total };
// }

export function getProductInfo(res){
API.getProducts(res)
      .then(res =>
        res.data.map(result => (
          rows.push(result)
          // console.log(rows)
        )))
        .catch(error => console.log("Check tasks error: " + error))
}

getProductInfo();

const rows = [
];  

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ProductProfit() {
  const classes = useStyles();

  // function forceUpdate(){
  //   this.forceUpdate();
  // }

  // forceUpdate();

  return (
    <React.Fragment>
      <Title>Aggregate Sales</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Quantity Sold</TableCell>
            <TableCell>Price per unit</TableCell>
            <TableCell align="right">Total Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row._id}</TableCell>
              <TableCell>{row.productName}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>${row.price}</TableCell>
              <TableCell align="right">{'$'+Math.floor((row.quantity * row.price))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="/inventory">
          View all products
        </Link>
      </div>
    </React.Fragment>
  );
}
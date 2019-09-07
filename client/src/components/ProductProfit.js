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


function getProductInfo(res){
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

  // getProductInfo();


  const classes = useStyles();
  console.log(rows);
  return (
    <React.Fragment>
      <Title>Product Profitability</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Cost per unit</TableCell>
            <TableCell>Price per unit</TableCell>
            <TableCell align="right">Profit Margin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row._id}</TableCell>
              <TableCell>{row.productName}</TableCell>
              <TableCell>${row.cost}</TableCell>
              <TableCell>${row.price}</TableCell>
              <TableCell align="right">{Math.floor((row.price/row.cost)*100)+ '%'}</TableCell>
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
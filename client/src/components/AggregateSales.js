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

// Generate Order Data
function createData(id, productid, brewname, quantity, price, total) {
  return { id, productid, brewname, quantity, price, total };
}


const rows = [
    createData(0, '098765', 'Black Raven Trickster', '100', '$4', 4*100),
    createData(1, '567809', 'Mac and Jacks', '300', '$4.5', 300*4.5),
    createData(2, '478392', 'Great Notion: Blueberry Muffins', '250', '$6', 250*6),
    createData(3, '493028', 'IPA 4', '125', '$8', 125*8),
    createData(4, '312678', 'IPA 5', '200', '$10', 200*10),
  ];
  

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ProductProfit() {
  const classes = useStyles();
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
              <TableCell>{row.productid}</TableCell>
              <TableCell>{row.brewname}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell align="right">{'$'+Math.floor((row.total))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href=" ">
          View all products
        </Link>
      </div>
    </React.Fragment>
  );
}
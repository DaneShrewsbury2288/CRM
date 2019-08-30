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
function createData(id, productid, brewname, cost, price, margin) {
  return { id, productid, brewname, cost, price, margin };
}


const rows = [
    createData(0, '098765', 'Black Raven Trickster', '$1', '$4', (4.00/1)),
    createData(1, '567809', 'Mac and Jacks', '$2', '$4.5', 4.5/2),
    createData(2, '478392', 'Great Notion: Blueberry Muffins', '$3', '$6', 6/3),
    createData(3, '493028', 'IPA 4', '$4', '$8', 8/4),
    createData(4, '312678', 'IPA 5', '$5', '$10', 10/5),
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
              <TableCell>{row.productid}</TableCell>
              <TableCell>{row.brewname}</TableCell>
              <TableCell>{row.cost}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell align="right">{Math.floor((row.margin)*100)+ '%'}</TableCell>
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
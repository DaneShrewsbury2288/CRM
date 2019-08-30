import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 1300,
        minHeight: 500,
    },
});


function priceRow(Quantity, Price) {
    return Quantity * Price;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function createData(name, ProductID, Quantity, Cost, Price) {
    return { name, ProductID, Quantity, Cost, Price};
}

const rows = [
    createData('IPA', 1, 1000, 30, 40),
    createData('Amber Ale', 2, 600, 30, 50),
    createData('Porter', 3, 300, 30, 60),
    createData('Stout', 4, 400, 30, 40),
    createData('Hefeweizen', 5, 400, 30, 40),
    createData('Blonde Ale', 6, 400, 40, 50),
];

class Inventory extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <PageTitle title="Inventory" />
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="right">Product ID</TableCell>
                                <TableCell align="right">Quantity&nbsp;</TableCell>
                                <TableCell align="right">Cost&nbsp;($)</TableCell>
                                <TableCell align="right">Price&nbsp;($)</TableCell>
                                <TableCell align="right">Total Cost&nbsp;($)</TableCell>
                                <TableCell align="right">Total Price&nbsp;($)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.ProductID}</TableCell>
                                    <TableCell align="right">{row.Quantity}</TableCell>
                                    <TableCell align="right">{row.Cost}</TableCell>
                                    <TableCell align="right">{row.Price}</TableCell>
                                    <TableCell align="right">{numberWithCommas(priceRow(row.Quantity, row.Cost))}</TableCell>
                                    <TableCell align="right">{numberWithCommas(priceRow(row.Quantity, row.Price))}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    };
}

export default withStyles(styles)(Inventory);




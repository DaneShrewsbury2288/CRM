import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 1000,
        minHeight: 500,
    },
});

function OrdersTable(props) {

    const { classes } = this.props;

    return (
        <div>
            <React.Fragment>
                <Paper className={classes.root}>
                    <Title>Orders</Title>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Ship To</TableCell>
                                <TableCell>Payment Method</TableCell>
                                <TableCell align="right">Sale Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.order.map(order => (
                                <TableRow key={order._id}>
                                    <TableCell align="right">{order.name}</TableCell>
                                    <TableCell align="right">{order.date}</TableCell>
                                    <TableCell align="right">{order.shipTo}</TableCell>
                                    <TableCell align="right">{order.paymentMethod}</TableCell>
                                    <TableCell align="right">{order.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        </div>
    );
}

export default withStyles(styles)(OrdersTable);
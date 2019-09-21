import React, { Component } from "react";
import Link from '@material-ui/core/Link';
import PageTitle from "../components/PageTitle";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddButton from "../components/AddButton";
import API from "../utilities/api";
import PacmanLoader from 'react-spinners/PacmanLoader';


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


function totalRow(Quantity, Price) {
    return (Quantity * Price).toFixed(2);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function balanceNumbers(num) {
    return (parseFloat(Math.round(num * 100) / 100).toFixed(2));
}


class InventorySupplies extends Component {
    state = {
        supplies: [],
    }


    componentDidMount() {
        API.getSupplies()
            .then(res => this.setState({ supplies: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        const { classes } = this.props;

        if (this.state.supplies.length > 0) {
            return (
                <div>
                    <div>
                        <PageTitle title="Inventory Supplies" />
                    </div>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell align="right">Product ID</TableCell>
                                    <TableCell align="right">Quantity&nbsp;</TableCell>
                                    <TableCell align="right">Cost&nbsp;($)</TableCell>
                                    <TableCell align="right">Total Cost&nbsp;($)</TableCell>
                                    <TableCell align="right">Order More&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.supplies.map(supply => (
                                    <TableRow key={supply._id}>
                                        <TableCell component="th" scope="row">
                                            {supply.name}
                                        </TableCell>
                                        <TableCell align="right">{supply._id}</TableCell>
                                        <TableCell align="right">{numberWithCommas(supply.quantity)}</TableCell>
                                        <TableCell align="right">{balanceNumbers(supply.cost)}</TableCell>
                                        <TableCell align="right">{numberWithCommas(totalRow(supply.quantity, supply.cost))}</TableCell>
                                        <TableCell align="right">
                                            <Link href="/PurchasingTool">
                                                {<AddButton />}
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <PageTitle title="Inventory Supplies" />
                    </div>
                    <PacmanLoader
                        className={"pacman-loader"}
                        sizeUnit={"px"}
                        size={75}
                        color={"#313131"}
                        loading={true}
                    />
                </div>
            )
        };
    }
}

export default withStyles(styles)(InventorySupplies);
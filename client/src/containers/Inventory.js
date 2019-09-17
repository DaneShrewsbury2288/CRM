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


class Inventory extends Component {
    state = {
        products: [],
    }


    componentDidMount() {
        API.getProducts()
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        const { classes } = this.props;

        if (this.state.products.length > 0) {
            return (
                <div>
                    <div>
                        <PageTitle title="Inventory" />
                    </div>
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
                                    <TableCell align="right">Order More&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.products.map(product => (
                                    <TableRow key={product.productName}>
                                        <TableCell component="th" scope="row">
                                            {product.productName}
                                        </TableCell>
                                        <TableCell align="right">{product._id}</TableCell>
                                        <TableCell align="right">{numberWithCommas(product.quantity)}</TableCell>
                                        <TableCell align="right">{balanceNumbers(product.cost)}</TableCell>
                                        <TableCell align="right">{balanceNumbers(product.price)}</TableCell>
                                        <TableCell align="right">{numberWithCommas(totalRow(product.quantity, product.cost))}</TableCell>
                                        <TableCell align="right">{numberWithCommas(totalRow(product.quantity, product.price))}</TableCell>
                                        <TableCell align="right">
                                            <Link href="/PurchasingTool">
                                                {<AddButton color='primary' />}
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
                        <PageTitle title="Inventory" />
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

export default withStyles(styles)(Inventory);




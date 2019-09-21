import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import ClientOrderButton from "./ClientOrderButton";
import ClientAddComment from "./ClientAddComment";


// Styles for the icons 
const useStyles1 = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    function handleFirstPageButtonClick(event) {
        onChangePage(event, 0);
    }

    function handleBackButtonClick(event) {
        onChangePage(event, page - 1);
    }

    function handleNextButtonClick(event) {
        onChangePage(event, page + 1);
    }

    function handleLastPageButtonClick(event) {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, clientId, email, phone, zipCode, joinedDate, lastCommunication, orders, comments) {
    return { name, clientId, email, phone, zipCode, joinedDate, lastCommunication, orders, comments };
}

const rows = [
    createData('Joe Smith', 2, 'joe@email.com', 1111111111, 11111, '01/20/2000', '07/22/2019'),
    createData('Sarah Sanders', 1, 'sara@email.com', 2222222222, 22222, '01/20/2000', '07/22/2019'),
    createData('Thor Thunder', 3, 'thor@email.com', 3333333333, 33333, '01/20/2000', '07/22/2019'),
    createData('Bob Smith', 2, 'joe@email.com', 1111111111, 11111, '01/20/2000', '07/22/2019'),
    createData('Samantha Sanders', 1, 'sara@email.com', 2222222222, 22222, '01/20/2000', '07/22/2019'),
    createData('Loki Thunder', 3, 'thor@email.com', 3333333333, 33333, '01/20/2000', '07/22/2019'),
    createData('Fred Smith', 2, 'joe@email.com', 1111111111, 11111, '01/20/2000', '07/22/2019'),
    createData('Christina Sanders', 1, 'sara@email.com', 2222222222, 22222, '01/20/2000', '07/22/2019'),
    createData('Hulk Thunder', 3, 'thor@email.com', 3333333333, 33333, '01/20/2000', '07/22/2019'),
].sort((a, b) => (a.name < b.name ? -1 : 1));


// Styles for the actual table itself
const useStyles2 = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    table: {
        minWidth: 1550,
        minHeight: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
}));

// This function converts a string of numbers into a US-Phone Number
let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };
    return null
};

let startDate = (date) => {
    const dateOne = date.slice(0, 10);
    const splitDate = dateOne.split('-');
    const month = splitDate[1].toString()
    switch (month) {
        case "01":
            return "Jan. " + splitDate[2] + ", " + splitDate[0];
        case "02":
            return "Feb. " + splitDate[2] + ", " + splitDate[0];
        case "03":
            return "Mar. " + splitDate[2] + ", " + splitDate[0];
        case "04":
            return "Apr. " + splitDate[2] + ", " + splitDate[0];
        case "05":
            return "May " + splitDate[2] + ", " + splitDate[0];
        case "06":
            return "Jun. " + splitDate[2] + ", " + splitDate[0];
        case "07":
            return "Jul. " + splitDate[2] + ", " + splitDate[0];
        case "08":
            return "Aug. " + splitDate[2] + ", " + splitDate[0];
        case "09":
            return "Sep. " + splitDate[2] + ", " + splitDate[0];
        case "10":
            return "Oct. " + splitDate[2] + ", " + splitDate[0];
        case "11":
            return "Nov. " + splitDate[2] + ", " + splitDate[0];
        case "12":
            return "Dec. " + splitDate[2] + ", " + splitDate[0];
        default:
            return null;
    }
}

export default function ClientListTable(props) {
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Client Name</TableCell>
                            <TableCell align="right">Client ID</TableCell>
                            <TableCell align="right">Email&nbsp;</TableCell>
                            <TableCell align="right">Phone Number&nbsp;</TableCell>
                            <TableCell align="right">Zip Code&nbsp;</TableCell>
                            <TableCell align="right">Date Joined&nbsp;</TableCell>
                            <TableCell align="right">Sales Associate&nbsp;</TableCell>
                            <TableCell align="right">Orders&nbsp;</TableCell>
                            <TableCell align="right">Comments&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.clients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(client => (
                            <TableRow key={client._id}>
                                <TableCell component="th" scope="row">
                                    {client.name}
                                </TableCell>
                                <TableCell align="right">{client._id}</TableCell>
                                <TableCell align="right">{client.email}</TableCell>
                                <TableCell align="right">{formatPhoneNumber(client.phone)}</TableCell>
                                <TableCell align="right">{client.zipCode}</TableCell>
                                <TableCell align="right">{startDate(client.joinedDate)}</TableCell>
                                <TableCell align="right">{client.user.map(user => (
                                    user.firstName + " " + user.lastName
                                )).join(" ")}</TableCell>
                                <TableCell align="right">{<ClientOrderButton
                                    clientId={client._id}
                                    clientName={client.name}
                                />}</TableCell>
                                <TableCell align="right">{<ClientAddComment
                                    clientId={client._id}
                                    clientName={client.name}
                                />}</TableCell>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 48 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </Paper>
    );
}
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Paper from '@material-ui/core/Paper';
import API from "../utilities/api";


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
    width: 35,
    height: 32,
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles2 = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    textAlign: 'center',
    width: 1200,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const useStyles3 = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 1000,
    minHeight: 500,
  },
}));

const titleStyle = {
  textAlign: "center",
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

export default function ClientOrderButton(props) {

  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    API.getClientOrders(props.clientId)
      .then(result => setData(result.data));
  }, [props.clientId]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Tooltip title="Order Information" aria-label="Order Information" onClick={handleOpen}>
        <Fab style={{backgroundColor: '#313131'}} color="primary" className={classes.fab}>
          <PersonIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes2.paper}>
          <h2 id="simple-modal-title">Table of Orders</h2>
          <Paper className={classes3.root}>
            <Title style={titleStyle}> {props.clientName} </Title>
            <Table className={classes3.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Product Ordered</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Sale Amount ($) </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(order => (
                  <TableRow key={order._id}>
                    <TableCell align="right">{order.client.map(client => (
                      client.name
                    ))}</TableCell>
                    <TableCell align="right">{startDate(order.completedDate)}</TableCell>
                    <TableCell align="right">{order.lineItems.map(product => (
                     product.product.productName
                    ))}</TableCell>
                    <TableCell align="right">{order.lineItems.map(product => (
                      product.quantity
                    ))}</TableCell>
                    <TableCell align="right">{order.lineItems.map(product => (
                      product.product.price
                    ))}</TableCell>
                    <TableCell align="right">{order.lineItems.map(product => (
                      (product.product.price * product.quantity).toFixed(2)
                    ))}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>

        </div>
      </Modal>

    </div>
  );
}
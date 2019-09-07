import React from 'react';
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


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
    width: 35,
    height: 32,
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles2 = makeStyles(theme => ({
  paper: {
    position: 'absolute',
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

function createData2(name, date, address, paymentMethod, amount) {
  return { name, date, address, paymentMethod, amount};
}

const rows = [ 
  createData2('Costco', "02/20/2019", 'Costco Home', 'Credit', 1000),
  createData2('Costco', "03/20/2019", 'Costco Home', 'Credit', 1200),
  createData2('Costco', "04/20/2019", 'Costco Home', 'Credit', 1500),
]

export default function ClientAddButton(props) {

  const classes = useStyles();

  const classes2 = useStyles2();

  const classes3 = useStyles3();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Order Information" aria-label="Order Information" onClick={handleOpen}>
        <Fab color="primary" className={classes.fab}>
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
            <Title align="center"> Costco Orders </Title>
            <Table className={classes3.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Ship To</TableCell>
                  <TableCell align="right">Payment Method</TableCell>
                  <TableCell align="right">Sale Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.date}>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.paymentMethod}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
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
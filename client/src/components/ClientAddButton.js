import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
// import OrdersTable from "./OrdersTable";


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
    width: 900,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ClientAddButton(props) {

  const classes = useStyles();

  const classes2 = useStyles2();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("this is ClientOrderButton props: " + JSON.stringify(props))

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
        </div>
      </Modal>
     
    </div>
  );
}
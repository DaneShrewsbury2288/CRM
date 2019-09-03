import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
    width: 35,
    height: 32,
  },
}));

export default function ClientAddButton() {

  const classes = useStyles();

  function addOrder() {
    console.log("Order Modal Clicked!")
  }

  return (
    <div>
      <Tooltip title="Order Information" aria-label="Order Information" onClick={addOrder}>
        <Fab color="primary" className={classes.fab}>
          <PersonIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
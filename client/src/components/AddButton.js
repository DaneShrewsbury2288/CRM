import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
    width: 35,
    height: 32,
  },
}));

export default function AddButton() {

  const classes = useStyles();

  function addOrder() {
    console.log("Reroute Order Clicked!")
  }

  return (
    <div>
      <Tooltip title="Add" aria-label="add" onClick={addOrder}>
        <Fab style={{backgroundColor: '#313131'}} color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
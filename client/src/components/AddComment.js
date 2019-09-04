import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddCommentIcon from '@material-ui/icons/AddComment';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
    width: 35,
    height: 32,
  },
}));

export default function AddComment() {

  const classes = useStyles();

  function addComment() {
    console.log("Added Comment")
  }

  return (
    <div>
      <Tooltip title="Add" aria-label="add" onClick={addComment}>
        <Fab color="primary" className={classes.fab}>
          <AddCommentIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
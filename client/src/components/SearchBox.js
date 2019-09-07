import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',    
    alignItems: 'center',
    width: 400,
    marginTop: 35,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

export default function SearchBox(props) {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        value={props.search}
        onChange={props.handleInputChange} 
        placeholder="Enter Client Name"
      />
      <IconButton className={classes.iconButton} aria-label="search" onClick={props.handleFormSubmit}>
        <SearchIcon />
      </IconButton>
      <IconButton className={classes.iconButton} aria-label="search" onClick={props.handleRefreshSubmit}>
        <RefreshIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
    </Paper>
  );
}
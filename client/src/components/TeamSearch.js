import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

function teamSearch(props) {
    return (
        <Paper>
      <InputBase
        value={props.search}
        onChange={props.handleInputChange} 
        placeholder=" ex. Jesse Pinkman "
      />
      <IconButton aria-label="search" onClick={props.handleFormSubmit}>
        <SearchIcon />
      </IconButton>
      <Divider orientation="vertical" />
    </Paper>
    )
}

export default teamSearch;

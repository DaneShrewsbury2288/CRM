import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import DiscoverMap from "../components/DiscoverMap";

// API key: 916274a8a0085768c492fb912cba1c5b

const styles = theme => ({
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

class Discover extends Component {
    state = {
        search: "",
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Zipcode Submitted")
    }

    render() {

        const { classes } = this.props;

        return (

            <div>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <PageTitle title="Discover" />
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.root}>
                            <InputBase
                                className={classes.input}
                                value={this.props.search}
                                onChange={this.props.handleInputChange}
                                placeholder=" Enter Zip Code "
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton className={classes.iconButton} aria-label="search" onClick={this.props.handleFormSubmit}>
                                <SearchIcon />
                            </IconButton>
                            <Divider className={classes.divider} orientation="vertical" />
                        </Paper>
                    </Grid>
                </Grid>
                <DiscoverMap />
            </div>

        )
    }
};


export default withStyles(styles)(Discover);
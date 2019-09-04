import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import ClientListTable from "../components/ClientListTable";
import SearchBox from "../components/SearchBox";
import Grid from '@material-ui/core/Grid';
import API from "../utilities/api";
import { LinearProgress } from '@material-ui/core';


class ClientList extends Component {
    state = {
        clients: [],
        search: "",
        error: "",
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    componentDidMount() {
        API.getClients()
            .then(res => this.setState({ clients: res.data.clients }))
            .catch(err => console.log(err))
    }


    handleFormSubmit = event => {
        event.preventDefault();
        let temporaryArray = this.state.clients;
        const result = temporaryArray.filter(client => client.name.toUpperCase() === this.state.search.toUpperCase());
        this.setState({ clients: result })
        console.log(result)
    }

    handleRefreshSubmit = event => {
        event.preventDefault();
        API.getClients()
            .then(res => this.setState({ clients: res.data.clients }))
            .catch(err => console.log(err))
    }


    render() {

        if (this.state.clients.length > 0) {
            return (
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <PageTitle title="Client List" />
                        </Grid>
                        <Grid item xs={3}>
                            <SearchBox
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                                handleRefreshSubmit={this.handleRefreshSubmit}
                            />
                        </Grid>
                    </Grid>
                    <ClientListTable
                        clients={this.state.clients}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <PageTitle title="Client List" />
                        </Grid>
                        <Grid item xs={3}>
                            <SearchBox
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                                handleRefreshSubmit={this.handleRefreshSubmit}
                            />
                        </Grid>
                    </Grid>
                    <LinearProgress />
                </div>
            )
        };
    }
}


export default (ClientList);
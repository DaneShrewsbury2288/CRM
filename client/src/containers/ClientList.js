import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import ClientListTable from "../components/ClientListTable";
import SearchBox from "../components/SearchBox";
import Grid from '@material-ui/core/Grid';
import API from "../utilities/api";
import PacmanLoader from 'react-spinners/PacmanLoader';


class ClientList extends Component {
    state = {
        clients: [],
        searchName: "",
        search: "",
        error: "",
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    componentDidMount() {
        this.setState({ searchName: "Enter Name" })
        API.getClients()
            .then(res => this.setState({ clients: res.data.clients }))
            .catch(err => console.log(err))
    }


    handleFormSubmit = event => {
        event.preventDefault();
        let temporaryArray = this.state.clients;
        const result = temporaryArray.filter(client =>
            client.name.toUpperCase() === this.state.search.toUpperCase()
        );
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
                                searchName={this.searchName}
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
                                searchName={this.searchName}
                            />
                        </Grid>
                    </Grid>
                    <PacmanLoader
                        className={"pacman-loader"}
                        sizeUnit={"px"}
                        size={75}
                        color={"#313131"}
                        loading={true}
                    />
                </div>
            )
        };
    }
}


export default (ClientList);
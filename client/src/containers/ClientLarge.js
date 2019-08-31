import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import TablePagination from "../components/TablePagination";
import SearchBox from "../components/SearchBox";
import Grid from '@material-ui/core/Grid';


class ClientLarge extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <PageTitle title="Client Large" />
                    </Grid>
                    <Grid item xs={3}>
                        <SearchBox>

                        </SearchBox>
                    </Grid>
                </Grid>

                <TablePagination>

                </TablePagination>

            </div>

        )
    };
}


export default ClientLarge;
import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import AddUsers from "../components/AddUsers";
import RemoveUsers from "../components/RemoveUsers";
import Button from '@material-ui/core/Button';

class AddRemoveUsers extends Component {
    state = {
        action: null
    }

    handleAdd = () => {
        this.setState({ action: "add" });
    }

    handleRemove = () => {
        this.setState({ action: "remove" });
    }

    back = () => {
        this.setState({ action: null });
    }

    render() {
        const styles = {
            button: {
                margin: '.5rem',
                backgroundColor: '#313131'
            }
        }
        return (
            <div>
                <PageTitle title="Add or Remove Users" />
                {this.state.action ?
                    this.state.action === "add" ?
                        <div>
                            <Button variant="contained" color="primary" style={{backgroundColor: '#313131'}} onClick={this.back}>Back</Button>
                            <AddUsers />
                        </div>
                        :
                        <div>
                            <Button variant="contained" color="primary" style={{backgroundColor: '#313131'}} onClick={this.back}>Back</Button>
                            <RemoveUsers />
                        </div>
                    :
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleAdd}
                            style={styles.button}
                        >
                            Add User
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleRemove}
                            style={styles.button}
                        >
                            Remove User
                        </Button>
                    </div>
                }
            </div>
        );
    }
}




export default AddRemoveUsers;
import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import AddUsers from "../components/AddUsers";
import RemoveUsers from "../components/RemoveUsers";

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
        this.setState({ action: null});
    }

    render() {
        return (
            <div>
                <PageTitle title="Add or Remove Users" />
                {this.state.action ?
                    this.state.action === "add" ?
                        <div>
                            <h4 onClick={this.back}>Back</h4>
                            <AddUsers />
                        </div>
                        :
                        <div>
                            <h4 onClick={this.back}>Back</h4>
                            <RemoveUsers />
                        </div>
                    :
                    <div>
                        <button onClick={this.handleAdd}>Add User</button>
                        <button onClick={this.handleRemove}>Remove User</button>
                    </div>
                }
            </div>
        );
    }
}

export default AddRemoveUsers;
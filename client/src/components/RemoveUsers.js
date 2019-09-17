import React, { Component } from "react";
import API from "../utils/API";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


class RemoveUsers extends Component {

    state = {
        users: [],
        user: null
    };

    componentDidMount() {
        this.loadUsers();
    }

    handleUser = event => {
        this.setState({ user: event.target.id }, () => {
        });
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    loadUsers = () => {
        API.getUsers()
            .then(res => this.setState({ users: res.data }, () => {
            }))
            .catch(err => console.log(err))
    }

    deleteUser = _id => {
        API.deleteUser(_id)
            .then(res => this.loadUsers())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <List>
                    {this.state.users.map(user => (
                        <ListItem key={user._id}>
                            <h2 id={user._id} permissions={user.permissions} onClick={this.handleUser}>
                                {user.firstName} {user.lastName}
                            </h2>
                            <span style={{color: 'red'}} onClick={() => this.deleteUser(user._id)} >
                                ✗
                            </span>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
};


export default RemoveUsers;
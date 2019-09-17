import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import API from "../utils/API";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import PermissionsSwitch from "../components/PermissionsSwitch";





class Permissions extends Component {

  state = {
    users: [],
    user: null,
    permissions: null
  };

  componentDidMount() {
    this.loadUsers();
  }

  handleUser = event => {
    console.log(event.target)
    this.setState({ user: event.target.id, permissions: parseInt(event.target.getAttribute('permissions')) }, () => {
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

  back = () => {
    this.setState({user: null})
  }

  render() {
    return (
      <div>
        <PageTitle title="Permissions" />
        {this.state.user
          ?
          <div>
            <Button variant="contained" color="primary" style={{backgroundColor: '#313131'}} onClick={this.back}>Back</Button>
          <PermissionsSwitch user={this.state.user} permissions={this.state.permissions} />
          </div>
          :
          <List>
            {this.state.users.map(user => (
              <ListItem key={user._id}>
                <h2 id={user._id} permissions={user.permissions} onClick={this.handleUser}>
                  {user.firstName} {user.lastName}
                </h2>
              </ListItem>
            ))}
          </List>
        }
      </div>
    )
  }
};


export default Permissions;
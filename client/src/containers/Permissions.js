import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import API from "../utils/API";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PermissionsSwitch from "../components/PermissionsSwitch";





class Permissions extends Component {

  state = {
    users: [],
    user: null
  };

  componentDidMount() {
    this.loadUsers();
  }

  handleUser = event => {
    this.setState({ user: event.target.id }, () => {
      console.log(this.state.user)
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
        console.log(this.state.users)
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <PageTitle title="Permissions" />
        <div className="row">
          <div className="col s6">
            <List>
              {this.state.users.map(user => (
                <ListItem key={user._id}>
                  <h4 id={user._id} onClick={this.handleUser}>
                    {user.firstName} {user.lastName}
                  </h4>
                </ListItem>
              ))}
            </List>
          </div>
          <div className="col s6">
            {this.state.user ?
                <PermissionsSwitch/> :
              null
            }
          </div>
        </div>
      </div>
    )
  }
};


export default Permissions;
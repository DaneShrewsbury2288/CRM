import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import API from "../utils/API";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialogue from "../components/Dialogue";



class MapOfSales extends Component {

  state = {
    users: [],
    user1: null,
    user2: null
  };

  componentDidMount() {
    this.loadUsers();
  }

  handleSetUser = event => {
    if (this.state.user1) {
      this.setState({ user2: event.target.id}, () => {
        console.log(this.state.user2)
      });
    }
    else {
      this.setState({user1: event.target.id}, () => {
        console.log(this.state.user1)
      })
    }
  };

  loadUsers = () => {
    API.getUsers()
      .then(res => this.setState({ users: res.data }, () => {
      }))
      .catch(err => console.log(err))
  }

  back = () => {
    this.setState({ user1: null, user2: null })
  }

  hideMessenger = () => {
    if (this.state.display === 'block') {
      this.setState({ display: 'none' }, () => {
        console.log(this.state.display)
      })
    }
    else if (this.state.display === 'none') {
      this.setState({ display: 'block' }, () => {
        console.log(this.state.display)
      })
    }
  }

  render() {


    return (
      <div>
        <PageTitle title="Check User Messages" />
        <div>
          {this.state.user2
            ?
            <div>
              <h4 onClick={this.back}>Back</h4>
              <Dialogue user={this.state.user1} partner={this.state.user2} />
            </div>
            :
            <List>
              {this.state.users.map(user => (
                <ListItem key={user._id}>
                  <h4 id={user._id} onClick={this.handleSetUser}>
                    {user.firstName} {user.lastName}
                  </h4>
                </ListItem>
              ))}
            </List>
          }
        </div>
      </div>
    )
  }
};


export default MapOfSales;
import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import API from "../utils/API";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CheckMessages from "../components/CheckMessages";



class MapOfSales extends Component {

  state = {
    users: [],
    user1: null,
    user1Name: null,
    user2: null,
    user2Name: null
  };

  componentDidMount() {
    this.loadUsers();
  }

  handleSetUsers = event => {
    let id = event.target.id.split(",")[0];
    let name = event.target.id.split(",")[1];
    if (this.state.user1) {
      this.setState({ user2: id, user2Name: name}, () => {
        console.log(this.state)
      });
    }
    else {
      this.setState({user1: id, user1Name: name}, () => {
        console.log(this.state)
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
              <CheckMessages user1={this.state.user1} user1Name={this.state.user1Name} user2={this.state.user2} user2Name={this.state.user2Name} />
            </div>
            :
            <List>
              {this.state.users.map(user => (
                <ListItem key={user._id}>
                  <h4 id={`${user._id},${user.firstName}`} onClick={this.handleSetUsers}>
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
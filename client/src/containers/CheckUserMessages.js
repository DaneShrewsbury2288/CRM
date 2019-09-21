import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import API from "../utils/API";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
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
    if (id === this.state.user2) {
      return null
    }
    else {
      if (this.state.user2) {
        this.setState({ user1: id, user1Name: name }, () => {
          console.log(this.state)
        });
      }
      else {
        this.setState({ user2: id, user2Name: name }, () => {
          console.log(this.state)
        })
      }
    }
  };

  loadUsers = () => {
    API.getUsers()
      .then(res => this.setState({ users: res.data }, () => {
      }))
      .catch(err => console.log(err))
  }

  back = () => {
    this.setState({ user1: null, user1Name: null, user2: null, user2Name: null })
  }

  render() {
    const styles = {
      user: {
        backgroundColor: 'none',
        padding: '.5rem',
        borderRadius: '.75rem'
      },
      selected: {
        backgroundColor: '#bee3f8',
        padding: '.5rem',
        borderRadius: '.75rem'
      }
    }

    return (
      <div style={{ width: '50%' }}>
        <PageTitle title="Check User Messages" />
        <div>
          {this.state.user1
            ?
            <div>
              <Button variant="contained" color="primary" style={{backgroundColor: '#313131'}} onClick={this.back}>Back</Button>
              <CheckMessages user1={this.state.user1} user1Name={this.state.user1Name} user2={this.state.user2} user2Name={this.state.user2Name} />
            </div>
            :
            <List>
              {this.state.users.map(user => (
                user._id === this.state.user2
                  ?
                  <ListItem key={user._id}>
                    <h2 id={`${user._id},${user.firstName}`} style={styles.selected} onClick={this.handleSetUsers}>
                      {user.firstName} {user.lastName}
                    </h2>
                  </ListItem>
                  :
                  <ListItem key={user._id}>
                    <h2 id={`${user._id},${user.firstName}`} style={styles.user} onClick={this.handleSetUsers}>
                      {user.firstName} {user.lastName}
                    </h2>
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
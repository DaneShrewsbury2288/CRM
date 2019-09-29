import React, { Component } from "react";
import API from "../utils/API";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Dialogue from "./Dialogue";
import PropTypes from "prop-types";
import Background from '../images/email-pattern.png'
import { connect } from "react-redux";


class Messenger extends Component {

  state = {
    users: [],
    partner: null,
    display: false,
    user: this.props.auth.user
  };

  componentDidMount() {
    this.loadUsers();
  }

  handleSetPartner = event => {
    this.setState({ partner: event.target.id}, () => {
    });
  };

  loadUsers = () => {
    this.setState({users: []})
    API.getUsersExcept(this.state.user._id)
      .then(res => this.findThese(res.data.users))
      .catch(err => console.log(err))
  }

  back = () => {
    this.setState({ partner: null });
    this.loadUsers();
  }

  findThese = (input) => {
    input.map(user => (
      API.findTheseUnread(`${this.state.user._id}&${user._id}`)
        .then(res => {
          var joined = this.state.users.concat(
            {
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              messages: res.data.length
            }
          );
          this.setState({ users: joined })
        })
        .catch(err => console.log(err))
    ))
  }

  hideMessenger = () => {
    if (this.state.display === true) {
      this.setState({ display: false }, () => {
      })
    }
    else if (this.state.display === false) {
      this.setState({ display: true }, () => {
      })
    }
  }

  render() {
    const { user } = this.props.auth;
    const styles = {
      body: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'repeat',
        position: 'absolute',
        width: '300px',
        maxHeight: '350px',
        bottom: '12px',
        right: '15px',
        zIndex: 10,
        overflowY: 'scroll',
        overflow: 'auto',
        borderTopRightRadius: '.8rem',
        borderTopLeftRadius: '.8rem'
      },
      header: {
        position: 'fixed',
        marginTop: 0,
        zIndex: 10,
      },
      title: {
        backgroundColor: '#313131',
        width: '300px',
        margin: 0,
        padding: 8,
        color: 'white',
        zIndex: 10,
        borderTopRightRadius: '.5rem',
        borderTopLeftRadius: '.5rem'
      },
      back: {
        margin: '8px',
        display: 'flex',
        justifyContent: 'flex-start'
      },
      content: {
        marginTop: '48px',
        minHeight: '240px',
        borderTopRightRadius: '.8rem',
        borderTopLeftRadius: '.8rem'
      },
      space: {
        padding: '8px'
      },
      name: {
        marginTop: '5px'
      }
    }
    const userList = this.state.users.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1)
    return (
      <div style={styles.body}>
        <div style={styles.header}>
          <h1 onClick={this.hideMessenger} style={styles.title}>Messenger</h1>
          {this.state.partner ?
            <div style={styles.back}>
              <Button variant="contained" color="primary" style={{backgroundColor: '#313131'}} onClick={this.back}>Back</Button>
            </div>
            :
            null
          }
        </div>
        {this.state.display ?
          <div style={styles.content}>
            {this.state.partner
              ?
              <div>

                <Dialogue user={user._id} partner={this.state.partner} />
              </div>
              :
              <List>
                {userList.map(user => (

                  <ListItem key={user._id}>
                    <Badge badgeContent={user.messages} color="error">
                      <h2 style={styles.name} id={user._id} onClick={this.handleSetPartner}>
                        {user.firstName} {user.lastName}
                      </h2>
                    </Badge>
                  </ListItem>
                ))}
              </List>
            }
          </div>
          :
          <h1 style={styles.space}> </h1>
        }
      </div>
    )
  }
};


Messenger.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(Messenger);
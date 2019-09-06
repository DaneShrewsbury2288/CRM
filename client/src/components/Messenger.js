import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import API from "../utils/API";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialogue from "./Dialogue";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Messenger extends Component {

  state = {
    users: [],
    partner: null,
    display: 'block'
  };

  componentDidMount() {
    this.loadUsers();
  }

  handleSetPartner = event => {
    this.setState({ partner: event.target.id, user: this.props.auth._id }, () => {
    });
  };

  loadUsers = () => {
    API.getUsers()
      .then(res => this.setState({ users: res.data }, () => {
      }))
      .catch(err => console.log(err))
  }

  back = () => {
    this.setState({ partner: null })
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
    const { user } = this.props.auth;
    const styles = {
      body: {
        backgroundColor: 'white',
        position: 'absolute',
        width: '300px',
        bottom: 0,
        right: 0,
        zIndex: 10
      },
      title: {
        backgroundColor: '#3f51b5',
        marginTop: 0,
        padding: 8,
        color: 'white'
      },
      content: {
        display: this.state.display
      }
    }

    return (
      <div style={styles.body}>
        <h4 onClick={this.hideMessenger} style={styles.title}>Messenger</h4>
        <div style={styles.content}>
          {this.state.partner
            ?
            <div>
              <h4 onClick={this.back}>Back</h4>
              <Dialogue user={user._id} partner={this.state.partner} />
            </div>
            :
            <List>
              {this.state.users.map(user => (
                <ListItem key={user._id}>
                  <h4 id={user._id} onClick={this.handleSetPartner}>
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


Messenger.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(Messenger);
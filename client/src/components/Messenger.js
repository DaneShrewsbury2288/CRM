import React, { Component } from "react";
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
    display: true,
    user: this.props.auth.user
  };

  componentDidMount() {
    this.loadUsers();
  }

  handleSetPartner = event => {
    this.setState({ partner: event.target.id, user: this.props.auth._id }, () => {
    });
  };

  loadUsers = () => {
    API.getUsersExcept(this.state.user._id)
      .then(res => this.setState({ users: res.data }, () => {
      }))
      .catch(err => console.log(err))
  }

  back = () => {
    this.setState({ partner: null })
  }

  hideMessenger = () => {
    if (this.state.display === true) {
      this.setState({ display: false }, () => {
        console.log(this.state.display)
      })
    }
    else if (this.state.display === false) {
      this.setState({ display: true }, () => {
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
        maxHeight: '350px',
        bottom: '17px',
        right: '17px',
        zIndex: 10,
        overflowY: 'scroll',
        overflow: 'auto'
      },
      title: {
        backgroundColor: '#3f51b5',
        width: '300px',
        position: 'fixed',
        marginTop: 0,
        padding: 8,
        color: 'white',
        zIndex: 10,
        borderTopRightRadius: '.5rem',
        borderTopLeftRadius: '.5rem'
      },
      content: {
        marginTop: '55px'
      }
    }

    return (
      <div style={styles.body}>
        <h4 onClick={this.hideMessenger} style={styles.title}>Messenger</h4>
      {this.state.display ?
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
                  <h6 id={user._id} onClick={this.handleSetPartner}>
                    {user.firstName} {user.lastName}
                  </h6>
                </ListItem>
              ))}
            </List>
          }
        </div>
        :
        <h2> </h2>
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
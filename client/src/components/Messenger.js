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
    partner: null
  };

  componentDidMount() {
    this.loadUsers();
  }

  handleSetPartner = event => {
    this.setState({ partner: event.target.id, user: this.props.auth._id}, () => {
    });
  };

  loadUsers = () => {
    API.getUsers()
      .then(res => this.setState({ users: res.data }, () => {
      }))
      .catch(err => console.log(err))
  }

  back = () => {
    this.setState({partner: null})
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <PageTitle title="Messenger" />
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
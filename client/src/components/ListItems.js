import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListMap from "./ListMap";

class ListItems extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <ListMap permissions={user.permissions} />
    );
  }
}

ListItems.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(ListItems);

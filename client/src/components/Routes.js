import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import RouteMap from "./RouteMap";

class Routes extends Component {
    render() {
        const { user } = this.props.auth;
        return (
            <RouteMap user={user} />
        );
    }
}

Routes.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps
)(Routes);
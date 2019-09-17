import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";


class AddUsers extends Component {
    constructor() {
        super();
        this.state = {
            userKey: "",
            userId: "",
            firstName: "",
            lastName: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            userKey: this.state.userKey,
            userId: this.state.userId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            </div>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-field col s12">
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.onChange}
                                        value={this.state.userKey}
                                        error={errors.userKey}
                                        id="userKey"
                                        type="text"
                                        className={classnames("", {
                                            invalid: errors.userKey
                                        })}
                                    />
                                    <label htmlFor="userKey">User Key</label>
                                    <span className="red-text">{errors.userKey}</span>
                                </div>
                                <div className="input-field col s12">
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.onChange}
                                        value={this.state.userId}
                                        error={errors.userId}
                                        id="userId"
                                        type="text"
                                        className={classnames("", {
                                            invalid: errors.userId
                                        })}
                                    />
                                    <label htmlFor="userId">User ID</label>
                                    <span className="red-text">{errors.userId}</span>
                                </div>
                                <div className="input-field col s12">
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.onChange}
                                        value={this.state.firstName}
                                        error={errors.firstName}
                                        id="firstName"
                                        type="text"
                                        className={classnames("", {
                                            invalid: errors.firstName
                                        })}
                                    />
                                    <label htmlFor="firstName">First Name</label>
                                    <span className="red-text">{errors.firstName}</span>
                                </div>
                                <div className="input-field col s12">
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.onChange}
                                        value={this.state.lastName}
                                        error={errors.lastName}
                                        id="lastName"
                                        type="text"
                                        className={classnames("", {
                                            invalid: errors.lastName
                                        })}
                                    />
                                    <label htmlFor="lastName">Last Name</label>
                                    <span className="red-text">{errors.lastName}</span>
                                </div>
                                <div className="input-field col s12">
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                        className={classnames("", {
                                            invalid: errors.password
                                        })}
                                    />
                                    <label htmlFor="password">Password</label>
                                    <span className="red-text">{errors.password}</span>
                                </div>
                                <div className="input-field col s12">
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={this.onChange}
                                        value={this.state.password2}
                                        error={errors.password2}
                                        id="password2"
                                        type="password"
                                        className={classnames("", {
                                            invalid: errors.password2
                                        })}
                                    />
                                    <label htmlFor="password2">Confirm Password</label>
                                    <span className="red-text">{errors.password2}</span>
                                </div>
                                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: '#313131', marginTop: '30px' }}
                                        color="primary"
                                        type="submit"
                                    >
                                        Add User
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddUsers.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(AddUsers));
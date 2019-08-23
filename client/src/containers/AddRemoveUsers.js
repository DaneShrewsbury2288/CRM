import React, { Component } from "react";
import PageTitle from "../components/PageTitle";


class AddRemoveUsers extends Component {
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
        console.log(newUser);
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <PageTitle title="Add or Remove Users" />
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userKey}
                                    error={errors.userKey}
                                    id="email"
                                    type="email"
                                />
                                <label htmlFor="email">User Key</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userId}
                                    error={errors.userId}
                                    id="email"
                                    type="email"
                                />
                                <label htmlFor="email">User ID</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.fistName}
                                    error={errors.fistName}
                                    id="fistName"
                                    type="text"
                                />
                                <label htmlFor="name">First Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.lastName}
                                    error={errors.lastName}
                                    id="lastName"
                                    type="text"
                                />
                                <label htmlFor="name">Last Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                />
                                <label htmlFor="password2">Confirm Password</label>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Add User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddRemoveUsers;
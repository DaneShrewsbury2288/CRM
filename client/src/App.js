import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Dashboard from "./components/Dashboard";
import Login from "./containers/Login2";
import Routes from "./components/Routes"
import { Provider } from "react-redux";
import store from "./store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = "./login";
    }
}

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/Login" component={Login} />
                            <Dashboard>
                                <Routes />
                            </Dashboard>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
};

export default App;

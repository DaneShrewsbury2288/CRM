import React, { Component } from "react";
import NoMatch from "../containers/NoMatch";
import PrivateRoute from "./PrivateRoute";
import { Switch } from "react-router-dom";
import routes from '../permissions'

class RouteMap extends Component {

    state = {
        permissions: parseInt(this.props.user.permissions),
    }

    render() {
        return (
            <Switch>
                {routes.map(permission => (
                    this.state.permissions & permission.bitmask
                        ?
                        <PrivateRoute
                            exact path={`${permission.href}`}
                            key={`${permission.href}`}
                            component={permission.component}
                        />
                        :
                        null
                ))}
                <PrivateRoute component={NoMatch} />
            </Switch>
        )
    }
}

export default RouteMap;

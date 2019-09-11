import React, { Component } from "react";
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import API from "../utils/API";
import switches from '../permissions'

class PermissionsSwitch extends Component {
    state = {
        perms: this.props.permissions
    }

    isChecked = (name, bitmask) => {
        // Getting the value and name of the input which triggered the change
        // Updating the input's state
        let checked = this.state[name] & bitmask;
        return Boolean(checked);
    };

    update = event => {
        event.preventDefault();
        API.updateUser(this.props.user, {
            permissions: this.state.perms
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    handleChange = (name, bitmask) => event => {
        // Getting the value and name of the input which triggered the change
        // Updating the input's state
        this.setState({
            [name]: this.state[name] ^ bitmask
        });
        console.log("new value: [" + name + "] = " + this.state[name]);
    };

    render() {
        return (
            <div>
                <List>
                    {switches.map(perm => (
                        <ListItem key={`${perm.bitmask}`}>
                            {perm.title} <Switch
                                checked={this.isChecked("perms", perm.bitmask)}
                                onClick={this.handleChange("perms", perm.bitmask)} />
                        </ListItem>
                    ))}
                </List>
                <button
                    onClick={this.update}
                    style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                    Update
                </button>
            </div>
        )
    }
};





export default PermissionsSwitch;
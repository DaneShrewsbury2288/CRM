import React, { Component } from "react";
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
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
                                color="default"
                                style={{color: '#313131'}}
                                checked={this.isChecked("perms", perm.bitmask)}
                                onClick={this.handleChange("perms", perm.bitmask)} />
                        </ListItem>
                    ))}
                </List>
                <Button
                    variant="contained"
                    color="primary"
                    style={{backgroundColor: '#313131'}}
                    onClick={this.update}
                >
                    Update
                </Button>

            </div>
        )
    }
};





export default PermissionsSwitch;
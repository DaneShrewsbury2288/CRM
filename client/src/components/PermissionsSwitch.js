import React, { Component } from "react";
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import API from "../utils/API";

const switches = [
    {
        label: "News Feed",
        bitmask: 0b1,
    },
    {
        label: "Sales Team Daily",
        bitmask: 0b10,
    },
    {
        label: "Inventory",
        bitmask: 0b100,
    },
    {
        label: "Client List",
        bitmask: 0b1000,
    },
    {
        label: "Purchasing Tool",
        bitmask: 0b10000,
    },
    {
        label: "Sales Analytics",
        bitmask: 0b100000,
    },
    {
        label: "Manager Task Assignment",
        bitmask: 0b1000000,
    },
    {
        label: "Sales Team Analytics",
        bitmask: 0b10000000,
    },
    {
        label: "Map Of Sales",
        bitmask: 0b100000000,
    },
    {
        label: "Discover",
        bitmask: 0b1000000000,
    },
    {
        label: "Add Or Remove Users",
        bitmask: 0b10000000000,
    }
];

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
                        {perm.label} <Switch
                            checked={this.isChecked("perms", perm.bitmask)}
                            onClick={this.handleChange("perms", perm.bitmask)} />
                    </ListItem>
                    ))}
                </List>
                <button onClick={this.update}>Update</button>
            </div>
        )
    }
};


export default PermissionsSwitch;
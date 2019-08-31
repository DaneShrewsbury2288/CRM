import React, { Component } from "react";
// import PageTitle from "../components/PageTitle";
// import Card from '../components/Card';
// import InputForm from '../components/InputForm';
import API from '../utilities/api';
import UserAPI from '../utils/API';

class ManagerTaskAssignment extends Component {
    state = {
        tasks: [],
        clients: [],
        users: []
    }
    UNSAFE_componentWillMount() {
        this.checkTasks();
        this.checkClients();
        this.checkUsers();
    }
    // get tasks
    checkTasks = () => {
        API.getTasks()
            .then(res =>
                this.setState({ tasks: res.data.tasks })
                )
                .catch(error => console.log("Check task error: " + error))
    }
    // get clients
    checkClients = () => {
        API.getClients()
            .then(res => 
                this.setState({ clients: res.data.clients })
                )
                .catch(error => console.log("Check task error: " + error))
    }
    // get users
    checkUsers = () => {
        UserAPI.getUsers()
            .then(res =>
                this.setState({ users: res.data })
                )
    }
    checkState = () => {
        console.log(this.state.tasks);
        console.log(this.state.clients);
        console.log(this.state.users);
    }
        // assigned status
        // completion status
        // assigned date
        // last contacted date
        // get individual ids
        // get user associated with each task
            // get each individual ids
            // get clients associated with each task
    // get users

    render() {
        return (
            <div>
                <button onClick={this.checkState}>
                Check tasks
                </button>
            </div>
        )
    }
}


export default ManagerTaskAssignment;
import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
// import Button from "../components/Button";
// import InputForm from '../components/InputForm';
// import Card from "../components/Card";
import TaskTable from "../components/Task";
import API from '../utilities/api';
import UserAPI from '../utils/API';

class ManagerTaskAssignment extends Component {
    state = {
        tasks: [],
        clients: [],
        users: [],
    }
    UNSAFE_componentWillMount() {
        this.checkUsers();
        this.checkTasks();
        this.checkClients();
    }
    // get tasks
    checkTasks = () => {
        API.getTasks()
            .then(res =>
                this.setState({ tasks: res.data.tasks })
            )
            .catch(error => console.log("Check tasks error: " + error))
    }
    // get users
    checkUsers = () => {
        UserAPI.getUsers()
            .then(res =>
                this.setState({ users: res.data })
            )
            .catch(error => console.log("Check users error: " + error))
    }
    // get all clients
    checkClients = () => {
        API.getClients()
            .then(res =>
                this.setState({ clients: res.data.clients })
            )
            .catch(error => console.log("Check task clients: " + error))
    }
    checkState = () => {
        console.log(this.state.tasks);
    }

    //functions to create
    // handle input change
    handleInputChange = () => {

    }
    // get current date

    render() {
        return (
            <div>
                <PageTitle title="Manager Task Assignment" />
                {/* <InputForm /> */}
                {/* <Card /> */}
                <TaskTable />
                <button onClick={this.checkState}>
                    Check tasks
                </button>
            </div>
        )
    }
}


export default ManagerTaskAssignment;
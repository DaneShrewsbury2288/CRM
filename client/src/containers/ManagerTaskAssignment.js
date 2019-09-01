import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
// import Card from '../components/Card';
// import InputForm from '../components/InputForm';
import API from '../utilities/api';
import UserAPI from '../utils/API';

class ManagerTaskAssignment extends Component {
    state = {
        tasks: [],
        clients: [],
        users: [],
        fulltasks: [],
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
        // for each task
        let tasks = this.state.tasks;
        for (let i = 0; i < tasks.length; i++) {
            this.getSingleTask(tasks[i]._id);
        }
    }
    // get each single task
    getSingleTask = (id) => {
        API.getTask(id)
            .then(res =>
                // pass client id, user id and all notes
                this.matchTask(res.data._id, res.data.assignDate, res.data.assignedStatus, res.data.completionStatus, res.data.description, res.data.clients[0], res.data.user[0], res.data.notes[0])
            )
            .catch(error => console.log("Check task error: " + error))
    }
    // match client and user to task id
    matchTask = (taskID, assignDate, assignedStatus, completionStatus, description, clientID, userID, notes) => {
        console.log("Task id: " + taskID);
        console.log("Task was assigned on: " + assignDate.replace("T00:00:00.000Z", ""));
        console.log("Has task been assigned? " + assignedStatus);
        console.log("Task completion status: " + completionStatus);
        console.log("Task description: " + description);
        console.log("Client id: " + clientID);
        console.log("User id: " + userID);
        console.log("Notes: " + notes);
        // api call for single client using id
        // api call for single user using id
    }
    checkState = () => {
        this.checkClients();
        this.checkUsers();
        this.checkTasks();
    }
    // assigned status
    // completion status
    // assigned date
    // last contacted date
    // get individual ids
    // get user associated with each task
    // get each individual ids
    // get clients associated with each task

    render() {
        return (
            <div>
                <PageTitle title="Manager Task Assignment" />
                <button onClick={this.checkState}>
                    Check tasks
                </button>
            </div>
        )
    }
}


export default ManagerTaskAssignment;
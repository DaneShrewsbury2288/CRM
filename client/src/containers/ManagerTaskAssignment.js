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
                .catch(error => console.log("Check task error: " + error))
                let users = this.state.users;
                for (let i = 0; i < users.length; i++) {
                    this.matchUserToTask(users[i]._id, users[i].firstName, users[i].lastName);
                }
    }
    // get users
    checkUsers = () => {
        UserAPI.getUsers()
            .then(res =>
                this.setState({ users: res.data })
                )
    }
    // match user id with task user id and display user name
    matchUserToTask = (id, firstName, lastName) => {
        let tasks = this.state.tasks;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].user[0]._id === id) {
                console.log("Task number " + tasks[i]._id + " has been assigned to " + firstName + " " + lastName + "\n Description: " + tasks[i].description + "\n Assigned Date: " + tasks[i].assignDate.replace("T00:00:00.000Z", "") + "\n Completion Status: " + tasks[i].completionStatus)
            }
        }
    }
    // get all clients
    checkClients = () => {
        API.getClients()
            .then(res => 
                this.setState({ clients: res.data.clients })
                )
                .catch(error => console.log("Check task error: " + error))
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
                // client id
                this.matchClientToTask(res.data.clients[0], res.data._id)
                )
    }
    // match client to task id
    matchClientToTask = (clientID, taskID) => {
        let clients = this.state.clients;
        for (let i = 0; i < clients.length; i++) {
            if (clients[i]._id === clientID) {
                console.log("Task number " + taskID + " is for client " + clients[i].name);
            }
        }
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
            <PageTitle title="Manager Task Assignment"/>
                <button onClick={this.checkState}>
                Check tasks
                </button>
            </div>
        )
    }
}


export default ManagerTaskAssignment;
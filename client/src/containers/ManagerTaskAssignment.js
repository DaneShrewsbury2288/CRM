import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
// import Button from "../components/Button";
import InputForm from '../components/InputForm';
import TaskTable from "../components/Task";
import API from '../utilities/api';
import UserAPI from '../utils/API';
import LinearProgress from '@material-ui/core/LinearProgress';
import moment from "moment";

class ManagerTaskAssignment extends Component {
    state = {
        tasks: [],
        clients: [],
        users: [],
        userOpenOption: false,
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
        const tasks = this.state.tasks;
        this.fullName(tasks[4].user[0].firstName, tasks[4].user[0].lastName);
    }
    // create user full name
    fullName = (first, last) => {
        if (first && last) {
            console.log(first + " " + last);
            return first + " " + last;
        } else {
            return "No Employe Assigned"
        }
    }

    //functions to create
    // handle input change
    handleInputChange = () => {

    }
    // get elapsed time for task
    getElapsedTime = (assignDate) => {
        const formatDate = assignDate.replace("T00:00:00.000Z", "");
        const timeDifference = moment().diff(moment(formatDate), 'days');
        // convert to positive for due dates
        if (timeDifference < 0) {
            return timeDifference * -1;
        } else {
            return timeDifference;
        }
    }
    // format task status
    capitialStatus = (status) => {
        return status
            .split('-')
            .map((dash) => dash.charAt(0).toUpperCase() + dash.substring(1))
            .join('-')
    }
    // format assigned status
    formatStatus = (status) => {
        if (status) {
            return "Assigned"
        } else {
            return "Unassigned"
        }
    }
    // change user selection menu from open to closed
    userHandleClick = () => {
        const open = !this.state.userOpenOption;
        this.setState({ userOpenOption: open })
    }



    render() {
        return (
            <div>
                <PageTitle title="Manager Task Assignment" />
                <InputForm 
                    userOpen={this.state.userOpenOption}
                    userHandleClick={this.userHandleClick}
                />
                <div className="task-space"></div>
                {/* force page to wait for tasks to load */}
                {this.state.tasks.length > 0 ? (
                    <div>
                        {this.state.tasks.map(task => (
                            <div>
                                <TaskTable
                                    key={task._id}
                                    taskNumber={task._id}
                                    // user={this.fullName(task.user[0].firstName, task.user[0].lastName)}
                                    userImage="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=622&q=80"
                                    users={this.state.users}
                                    // client={task.client}
                                    description={task.description}
                                    assignedStatus={this.formatStatus(task.assignedStatus)}
                                    elapsedTime={this.getElapsedTime(task.assignDate)}
                                    dueDate={this.getElapsedTime(task.dueDate)}
                                    completionStatus={this.capitialStatus(task.completionStatus)}
                                // note={task.note}
                                />
                            </div>
                        ))}
                    </div>
                ) :  (
                    <LinearProgress />
                    )}
                <button onClick={this.checkState}>
                    Check tasks
                </button>
            </div>
        )
    }
}


export default ManagerTaskAssignment;
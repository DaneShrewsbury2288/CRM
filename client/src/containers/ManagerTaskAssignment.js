import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import InputForm from '../components/InputForm';
import TaskTable from "../components/Task";
import API from '../utilities/api';
import UserAPI from '../utils/API';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import moment from "moment";

class ManagerTaskAssignment extends Component {
    state = {
        tasks: [],
        clients: [],
        users: [],
        userOpenOption: false,
        userDropDown: "Assign an Employee",
        clientDropDown: "Assign a Client",
        clientOpenOption: false,
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
        const user = tasks[4].user[0].lastName;
        console.log(user);
        // console.log(Object.keys(user));
        // console.log(Array.isArray(user));
    }
    // create user full name
    fullName = (userInfo) => {
        let str = "";
        for (let i = 0; i < userInfo.length; i++) {
            if (userInfo[i].firstName && userInfo[i].lastName) {
                str += str + userInfo[i].firstName + " " + userInfo[i].lastName;
            } else {
                str += "";
            }
        }
        if (str.length > 0) {
            return str;
        } else {
            str += "No Employee Assigned";
            return str;
        }
    }
    checkIfTaskHasClient = (client) => {
        let str = "";
        for (let i = 0; i < client.length; i++) {
            if (client[i].name) {
                str += str + client[i].name;
            } else {
                str += "";
            }
        }
        if (str.length > 0) {
            return str;
        } else {
            str += "No Client Assigned";
            return str;
        }
    }
    // add default if user does not have a profile picutre
    checkUserImage = user => {
        for (let i = 0; i < user.length; i++) {
            if (user[i].image) {
                return user[i].image;
            } else {
                return "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=622&q=80";
            }
        }
    }
    checkTaskNotes = note => {
        let str = "";
        for (let i = 0; i < note.length; i++) {
            if (note[i].content) {
                str += str + note[i].content;
            } else {
                str += "";
            }
        }
        if (str.length > 0) {
            return str;
        } else {
            str += "No Notes Found";
            return str;
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
    };
    // change user selection menu from open to closed
    userHandleClick = () => {
        const open = !this.state.userOpenOption;
        this.setState({ userOpenOption: open })
    };
    userSelection = (id, firstName, lastName) => {
        console.log(id);
        console.log(firstName);
        console.log(lastName);
    };
    clientHandleClick = () => {
        const open = !this.state.clientOpenOption;
        this.setState({ clientOpenOption: open })
    }
    clientSelection = (id, name) => {
        console.log(id);
        console.log(name);
    }
    // close user/client selection menus if user clicks elsewhere
    userHandleClickAway = () => {
        this.setState({ userOpenOption: false })
    }
    clientHandleClickAway = () => {
        this.setState({ clientOpenOption: false })
    }


    render() {
        return (
            <div>
                <PageTitle title="Manager Task Assignment" />
                <InputForm
                    userOpen={this.state.userOpenOption}
                    userHandleClick={this.userHandleClick}
                    users={this.state.users}
                    userSelection={this.userSelection}
                    userDropDown={this.state.userDropDown}
                    clientOpen={this.state.clientOpenOption}
                    clientHandleClick={this.clientHandleClick}
                    clients={this.state.clients}
                    clientSelection={this.clientSelection}
                    clientDropDown={this.state.clientDropDown}
                    userHandleClickAway={this.userHandleClickAway}
                    clientHandleClickAway={this.clientHandleClickAway}
                />
                <div className="task-space"></div>
                {/* force page to wait for tasks to load */}
                {this.state.tasks.length > 0 ? (
                    <div>
                        {this.state.tasks.map(task => (
                            <div key={task._id}>
                                <Grid item lg={12}>
                                    <TaskTable
                                        taskNumber={task._id}
                                        user={this.fullName(task.user)}
                                        userImage={this.checkUserImage(task.user)}
                                        users={this.state.users}
                                        client={this.checkIfTaskHasClient(task.client)}
                                        description={task.description}
                                        assignedStatus={this.formatStatus(task.assignedStatus)}
                                        elapsedTime={this.getElapsedTime(task.assignDate)}
                                        dueDate={this.getElapsedTime(task.dueDate)}
                                        completionStatus={this.capitialStatus(task.completionStatus)}
                                        note={this.checkTaskNotes(task.note)}
                                    />
                                </Grid>
                            </div>
                        ))}
                    </div>
                ) : (
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
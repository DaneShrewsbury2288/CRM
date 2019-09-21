import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import InputForm from '../components/InputForm';
import TaskTable from "../components/Task";
import API from '../utilities/api';
import UserAPI from '../utils/API';
import GridLoader from 'react-spinners/GridLoader';
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
        selectedDate: moment().format(),
        currentDate: moment().format('MM DD YYYY'),
        inputDescription: "",
        dueDate: "",
        userSelection: [],
        clientSelection: [],
        taskAssigned: false,
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
            .catch(error => console.log("Check clients error: " + error))
    }
    // submit
    saveTask = (data) => {
        API.saveTask(data)
            .then(res =>
                this.setState({ tasks: res.data.tasks })
            )
            .catch(error => console.log("Save task error: " + error))
    }
    // delete task
    deleteTask = (id) => {
        API.deleteTask(id)
            .then(res =>
                this.setState({ tasks: res.data.tasks })
            )

    }
    checkState = () => {
        console.log(this.state.tasks);
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
                return "https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80";
            }
        }
    }
    checkTaskNotes = note => {
        let str = "";
        for (let i = 0; i < note.length; i++) {
            if (note[i].content) {
                str += note[i].content;
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
    // handle input change
    handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        // if all required fields have been submitted
        if (this.state.inputDescription && this.state.dueDate) {
            const desc = this.state.inputDescription;
            const date = this.state.dueDate;
            const user = this.state.userSelection;
            const client = this.state.clientSelection;
            const currentDate = this.state.currentDate;
            const assigned = this.state.taskAssigned;
            // check if date is in correct format
            if (date.length === 10) {
                
            } else {
                alert("Please input a valid date");
            };
            if (user) {
                this.setState({ assigned: true })
            }
            // organize the data for the db
            const newTask = {
                client: client,
                user: user,
                assignDate: currentDate,
                dueDate: date,
                completedDate: "",
                assignedStatus: assigned,
                completionStatus: "to-do",
                description: desc,
                note: [],
            };
            // save task to db
            this.saveTask(newTask);
            // clear form by resetting the state
            this.setState({
                inputDescription: "",
                dueDate: "",
                userSelection: [],
                clientSelection: []
            });
            this.checkTasks();
            this.setState(this.state);
        } else {
            alert("Please complete all required fields");
        }
    };
    // get elapsed time for task
    getElapsedTime = (assignDate) => {
        const formatDate = assignDate.replace("T00:00:00.000Z", "");
        const timeDifference = moment().diff(moment(formatDate), 'days');
        if (formatDate < Date.now()) {
            return timeDifference;
        } else { 
            return timeDifference * -1;
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
    clientHandleClick = () => {
        const open = !this.state.clientOpenOption;
        this.setState({ clientOpenOption: open })
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
            {/* <button onClick={this.checkState}>Check state</button> */}
                <PageTitle title="Manager Task Assignment" />
                <InputForm
                    userOpen={this.state.userOpenOption}
                    userHandleClick={this.userHandleClick}
                    users={this.state.users}
                    userDropDown={this.state.userDropDown}
                    clientOpen={this.state.clientOpenOption}
                    clientHandleClick={this.clientHandleClick}
                    clients={this.state.clients}
                    clientDropDown={this.state.clientDropDown}
                    userHandleClickAway={this.userHandleClickAway}
                    clientHandleClickAway={this.clientHandleClickAway}
                    currentDate={this.state.currentDate}
                    description={this.state.inputDescription}
                    dueDate={this.state.dueDate}
                    userSelection={this.state.userSelection}
                    clientSelection={this.state.clientSelection}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="task-space"></div>
                {/* force page to wait for tasks to load */}
                {this.state.tasks.length > 0 ?
                    (
                        <div>
                            {this.state.tasks.map(task => (
                                <div key={task._id}>
                                    <Grid item lg={12}>
                                        <TaskTable
                                            taskNumber={task._id.slice(0, 7)}
                                            user={this.fullName(task.user)}
                                            userImage={this.checkUserImage(task.user)}
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
                        <Grid container>
                            <Grid item lg={5}></Grid>
                            <Grid item lg={2}>
                                <GridLoader
                                    className={"grid-loader"}
                                    sizeUnit={"px"}
                                    size={45}
                                    color={"rgb(49, 49, 49)"}
                                    loading={true}
                                />
                            </Grid>
                            <Grid item lg={5}></Grid>
                        </Grid>
                    )
                }
            </div>
        )
    }
}

export default ManagerTaskAssignment;
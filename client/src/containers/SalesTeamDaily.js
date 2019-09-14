import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import Kanban from "../components/Kanban";
import API from '../utilities/api';
// import GridLoader from 'react-spinners/GridLoader';
// import Grid from '@material-ui/core/Grid';
// import TaskTable from "../components/Task";
import moment from "moment";

class SalesTeamDaily extends Component {
    state = {
        tasks: [],
    }
    UNSAFE_componentWillMount() {
        // replace with store user id
        this.getTasks("5d618fb9691b892e385e7758");
    }

    getTasks = (userid) => {
        API.getTaskByUser(userid)
            .then(res =>
                this.setState({ tasks: res.data.tasks })
            )
            .catch(error => console.log("Check tasks error: " + error));
        let tasks = this.state.tasks;
        if (tasks.length > 0) {
            this.filterTasks();
        }
            
    }
    // filter out tasks with no user
    filterTasks = () => {
        let tasks = this.state.tasks;
        const filteredTasks = tasks.filter(task => task.user.length > 0);
        console.log(filteredTasks);
        this.setState({ tasks: filteredTasks });
    }
    checkState = () => {
        
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

    render() {
        return (
            <div>
                <PageTitle title="Sales Team Daily" />
                {/* <button onClick={this.filterTasks}>Filter Tasks</button> */}
                <Kanban />
                {/* force page to wait for tasks to load */}
                {/* {this.state.tasks.length > 0 ?
                    (
                        <div>
                            {this.state.tasks.map(task => (
                                <div key={task._id}>
                                    <Grid item lg={12}>
                                        <TaskTable
                                            taskNumber={task._id}
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
                                    size={15}
                                    color={'#9E0031'}
                                    loading={true}
                                />
                            </Grid>
                            <Grid item lg={5}></Grid>
                        </Grid>
                    )
                } */}
            </div>
        )
    }
}

export default SalesTeamDaily;
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
        demoDate: "2019-07-21T00:00:00.000Z",
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
        this.getElapsedTime(this.state.demoDate);
    }

    //functions to create
    // handle input change
    handleInputChange = () => {

    }
    // get elapsed time for task
    getElapsedTime = (assignDate) => {
        const formatDate = assignDate.replace("T00:00:00.000Z", "");
        const currentTime = new Date().getTime();
        const currentDate = new Date(currentTime)
        console.log(currentDate.toString())
        console.log("formatted original date: " + formatDate);
    }
    // get current date

    render() {
        return (
            <div>
                <PageTitle title="Manager Task Assignment" />
                {/* <InputForm /> */}
                {/* <Card /> */}
                {this.state.tasks.map(task => (
                    <div>
                        <TaskTable
                            key={task._id}
                            // user={task.user}
                            // client={task.client}
                            description={task.description}
                            assignedStatus={task.assignedStatus}
                            // elapsedTime={task.fillthisin}
                            // dueDate={task.fillthisin}
                            completionStatus={task.completionStatus}
                            // note={task.note}
                        />
                    </div>
                ))}
                <button onClick={this.checkState}>
                    Check tasks
                </button>
            </div>
        )
    }
}


export default ManagerTaskAssignment;
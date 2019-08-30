import React, { Component } from "react";
// import PageTitle from "../components/PageTitle";
// import Card from '../components/Card';
// import InputForm from '../components/InputForm';
import API from '../utilities/api';

class ManagerTaskAssignment extends Component {
    state = {
        tasks: [],
        clients: [],
        users: []
    }
    UNSAFE_componentWillMount() {
        this.checkTasks();
    }
    // get tasks
    checkTasks = () => {
        API.getTasks()
            .then(res =>
                this.setState({ tasks: res.data.tasks})
                )
                .catch(error => console.log("Check task error: " + error))
    }
    checkState = () => {
        console.log(this.state.tasks);
    }
        // assigned status
        // completion status
        // assigned date
        // last contacted date
        // get individual ids
        // get user associated with each task
            // get each individual ids
            // get clients associated with each task
    // get clients
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
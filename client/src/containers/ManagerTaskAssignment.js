import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import API from '../utilities/api';

class ManagerTaskAssignment extends Component {
    state = {
        clients: []
    }
    componentDidMount() {
        this.getClients();
    }
    // get clients/tasks from db
    getClients = () => {
        API.getTasks()
            .then(res =>
                this.setState({ clients: res.data }, () => {
                    console.log(this.state.clients)
                })
            )
            .catch(err => console.log(err))
    }
    // save task to db
    addTask = () => {
        API.saveTask()
            // re-run get request with updated tasks
            .then(() => this.getClients());
    }
    render() {
        return (
            <div>
                <PageTitle title="Manager Task Assignment" />
                <p>Add New Client</p>
                <InputForm />
                <button
                    onClick={this.addTask}
                    className="">
                    Add Task
                </button>
                {/* map all task cards */}
                {this.state.clients.map(client => (
                    <div>
                        <Card
                            key={client.id}
                            id={client.id}
                            salesPerson={client.teamMemberName}
                            clientDescription={client.description}
                        />
                        {/* place delete button for each saved task */}
                        {/* completed button */}
                    </div>
                ))}
            </div>
        )
    }
}


export default ManagerTaskAssignment;
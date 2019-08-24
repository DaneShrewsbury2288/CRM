import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import API from '../utilities/api';

class ManagerTaskAssignment extends Component {
    state = {
        clients: [],
        employees: []
    }
    componentDidMount() {
        this.getClients();
    }
    getClients = () => {
        API.getTasks()
            .then(res =>
                this.setState({ clients: res.data }, () => {
                    console.log(this.state.clients)
                })
            )
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <PageTitle title="Manager Task Assignment" />
                <p>Add New Client</p>
                <InputForm />
                <button
                    onClick="{this.handleFormSubmit}"
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
                                    </div>
                                ))}
            </div>
        )
    }
}


export default ManagerTaskAssignment;
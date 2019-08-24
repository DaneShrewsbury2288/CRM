import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import EmployeeForm from '../components/EmployeeForm';
// import API from '../utilities/api';

class SalesTeamAnalytics extends Component {
    // state = {
    //     employees: []
    // }
    // componentDidMount() {
    //     this.getEmployees();
    // }
    // // get clients/tasks from db
    // getEmployees = () => {
    //     API.getTasks()
    //         .then(res =>
    //             this.setState({ employees: res.data }, () => {
    //                 console.log(this.state.employees)
    //             })
    //         )
    //         .catch(err => console.log(err))
    // }
    // // save task to db
    // addTask = () => {
    //     API.saveEmployee()
    //         // re-run get request with updated tasks
    //         .then(() => this.getEmployees());
    // }
    render() {
        return (
            <div>
                <PageTitle title="Sales Team Analytics" />
                <p>New Employee</p>
                <EmployeeForm />
                <button
                    onClick={console.log("Add employee button")}
                    className="">
                    Add Employee
                </button>
                
            </div>
        )
    }
}


export default SalesTeamAnalytics;
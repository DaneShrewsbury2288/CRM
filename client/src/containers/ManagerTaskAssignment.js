import React from "react";
import PageTitle from "../components/PageTitle";

function ManagerTaskAssignment() {
    // state = {
    //     tasks: [],
    //     employeeName: "",
    //     clientName: "",
    //     description: "",
    // }
    // getTasks = () => {
    //     API.get()
    //         .then(res => {
    //             this.setState({ tasks: res })
    //         })
    //         .catch((err) => console.log(err));
    // }
    // addTask = (employee, client, description) => {
    //     API.post()
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch((err) => console.log(err));
    // }
    // componentDidMount() {
    //     this.getTasks();
    // }
    // handleInputChange = () => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({ [name]: value });
    // }
    // handleFormSubmit = event => {
    //     event.preventDefault();
    // }

    return (
        <div>
            <PageTitle title="Manager Task Assignment" />
            <form className="form">
                <input
                    value=""
                    name=""
                    onChange="{this.handleInputChange}"
                    type="text"
                    className="form-employee"
                    placeholder="Associate Name"
                    autoComplete="off"
                />
                <input
                    value=""
                    name=""
                    onChange="{this.handleInputChange}"
                    type="text"
                    className="form-client"
                    placeholder="Client Name"
                    autoComplete="off"
                />
                <input
                    value=""
                    name=""
                    onChange="{this.handleInputChange}"
                    type="text"
                    className="form-description"
                    placeholder="Client Description"
                    autoComplete="off"
                />
                <button
                    onClick="{this.handleFormSubmit}"
                    className="">
                    Add Task
          </button>
            </form>
            {/* map all task cards */}
        </div>
    )
};

export default ManagerTaskAssignment;
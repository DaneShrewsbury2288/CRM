import React from "react";
import PageTitle from "../components/PageTitle";
import Card from '../components/Card';
import InputForm from '../components/InputForm';


function ManagerTaskAssignment() {

    return (
        <div>
            <PageTitle title="Manager Task Assignment" />
            <p>Client Form</p>
            <InputForm />
            <button
                onClick="{this.handleFormSubmit}"
                className="">
                Add Task
            </button>
            {/* map all task cards */}
            <Card />
        </div>
    )
};

export default ManagerTaskAssignment;
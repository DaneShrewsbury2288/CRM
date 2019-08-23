import React from "react";

function TaskForm(props) {
    return (
        <form>
            {/* employee name */}
            <div className="">
                <input
                    onChange={props.handleInputChange}
                    value={props.employeeName}
                    name=""
                    type="text"
                    className="form-employee"
                    placeholder="Associate Name"
                    id="search"
                    autoComplete="off"
                />
                {/* Client name */}
                <input
                    onChange={props.handleInputChange}
                    value={props.clientName}
                    name=""
                    type="text"
                    className="form-client"
                    placeholder="Client Name"
                    id="search"
                    autoComplete="off"
                />
                {/* description */}
                <input
                    onChange={props.handleInputChange}
                    value={props.description}
                    name=""
                    type="text"
                    className="form-description"
                    placeholder="Client Description"
                    id="search"
                    autoComplete="off"
                />
                <br />
                <button onClick={props.handleFormSubmit} className="btn">
                    Add Task
        </button>
            </div>
        </form >
    )
}

export default TaskForm;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    // client schema reference for client id associated with this task
    client: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Clients model
        ref: "Client",
        // Each task must be associated with a client
    }],
    // user schema reference for user id associated with this task
    user: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the User model
        ref: "User"
    }],
    // when this task was set to assigned
    // dates can be passed in as "2018-12-09"
    assignDate: {
        type: Date
    },
    dueDate: {
        type: Date
    },
    completedDate: {
        type: Date
    },
    // if the task has been assigned or not
    assignedStatus: {
        type: {
            Boolean,
            default: false
        }
    },
    // status of task for kanban cards
    completionStatus: {
        type: {
            String,
            default: "to-do"
        }
    },
    description: {
        type: String,
        required: true
    },
    // create notes and associate with task
    note: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "Note"
    }],
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
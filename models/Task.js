const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    // client schema reference for client id associated with this task
    clients: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Clients model
            ref: "Client",
            // Each task must be associated with a client
            required: true
        }
    ],
    // user schema reference for user id associated with this task
    user: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the User model
            ref: "User"
        }
    ],
    // when this task was set to assigned
    assignDate: {
        type: Date,
        default: Date.now
    },
    // if the task has been assigned or not
    assignedStatus: {
        type: {
            Boolean,
            default: false
        },
        required: true
    },
    // if task is completed or not
    completionStatus: {
        type: {
            Boolean,
            default: false
        },
        required: true
    }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
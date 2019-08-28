const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Client"
    },
    potential: {
        type: Number,
        required: true
    },
    industry: {
        type: String
    },
    teamMemberID: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    description: {
        type: String,
        required: true
    },
    assignDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    completed: {
        type: {
            Boolean,
            default: false
        },
        required: true
    }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
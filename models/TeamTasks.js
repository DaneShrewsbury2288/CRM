const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    clientEmail: {
        type: String,
        required: true
    },
    clientPhone: {
        type: Number,
        required: true
    },
    potential: {
        type: Number,
        required: true
    },
    industry: {
        type: String
    },
    teamMemberID: {
        type: Number,
        required: true
    },
    teamMemberName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    assignDate: {
        type: Date.now,
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
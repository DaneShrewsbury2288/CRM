const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    _id: {
        type: String,
        required: true
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
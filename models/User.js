const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userKey: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    permissions: {
        type: Number,
        default: 7
    }
});


const User = mongoose.model("User", UserSchema);

module.exports = User;


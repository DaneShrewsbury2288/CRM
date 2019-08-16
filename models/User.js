var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;


var UserSchema = new Schema({
    userKey: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    permissions: {
        type: Number,
        required: true
    }
});


var User = mongoose.model("User", UserSchema);

module.exports = User;
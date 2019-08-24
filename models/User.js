var mongoose = require("mongoose");

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


var User = mongoose.model("User", UserSchema);

module.exports = User;


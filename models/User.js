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
    },
    // create notes and associate with client
    note: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "Note"
    }],
    // when the user was created
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;


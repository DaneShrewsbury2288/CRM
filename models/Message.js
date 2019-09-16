const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    // content of the message
    content: String,
    //
    sender:
    {
        type: String,
        required: true
    },
    receiver:
    {
        type: String,
        required: true
    },
    // when the message was sent
    created_at:
    {
        type: Date,
        default: Date.now
    },
    read:
    {
        type: Boolean,
        default: false
    }
});

// This creates our model from the above schema, using mongoose's model method
const Message = mongoose.model("Message", MessageSchema);

// Export the Message model
module.exports = Message;
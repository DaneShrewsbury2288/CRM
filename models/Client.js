const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    zipCode: {
        type: Number
    },
    joinedDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    lastContacted: {
        type: Date,
        default: Date
    },
    isLargeClient: {
        type: Boolean,
        default: false
    },
    note: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ],
    order: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ],
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
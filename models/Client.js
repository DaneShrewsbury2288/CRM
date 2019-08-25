const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// client can be used for businesses or individual customers
const ClientSchema = new Schema({
    // client info
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
    // when the client became a client
    joinedDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    // sales schema reference for sales for the client
    // can be used to show how much money has been made on the client
    sales: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Sales model
            ref: "Sales"
        }
    ]
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
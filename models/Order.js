const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    // client id associated with the order
    client: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Client model
        ref: "Client",
        required: true
    }],
    lineItems: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number
        }
    }],
    // when the order was created
    created_at: {
        type: Date,
        default: Date.now
    },
    // when the user completed order
    checked_out: {
        type: Date,
        default: Date.now
    },
    // employee id associated with the order
    user: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the User model
        ref: "User",
        required: true,
        // set default user for online payments
        default: "5d71bac0a08ace50fc21ad71"
    }],
    // if the order has been fulfilled
    fulfilled: {
        type: {
            Boolean,
            default: false
        }
    },
    // when order is fulfilled
    completedDate: {
        type: Date,
        default: Date.now
    },
    // create notes and associate with order
    note: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "Note"
    }]
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
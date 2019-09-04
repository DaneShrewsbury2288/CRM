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
    product: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    // when the order happened
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    // employee id associated with the order
    user: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the User model
        ref: "User"
    }],
    // if the order has been fulfilled
    fulfilled: {
        type: {
            Boolean,
            default: false
        }
    },
    // create notes and associate with order
    note: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "Note"
    }],
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
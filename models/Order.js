const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const orderSchema = new Schema({
    orderID: {
        type: Number,
    },
    clientID: {
        type: String,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    products: [
        {
            reference: {
                type: Schema.Types.ObjectId,
                ref: "Product"
            },
            productId: {
                type: Number,
                required: true
            },
            productName: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    date: {
        type: Date,
    },
    total: {
        type: Number,
    },
    salesAgent: {
        type: String,
    }

});


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
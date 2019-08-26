const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    // gives user ability to specify...
    details: {
        // if they have different locations(warehouses) for their inventory
        location: String,
        // exactly where in storage it is located
        aisle: String
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

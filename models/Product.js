const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        default: 1,
        required: true,
        trim: true
    },
    cost: {
        type: Number,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

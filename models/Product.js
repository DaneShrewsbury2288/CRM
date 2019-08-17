var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var productSchema = new Schema({
    productId: {
        type: Number,
    },
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
    },
    cost: {
        type: Number,
    },
    price: {
        type: Number,
    }
});


var Product = mongoose.model("Product", productSchema);

module.exports = Product;
var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var productSchema = new Schema({
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
        required: true
    },

});


var Product = mongoose.model("Product", productSchema);

module.exports = Product;

var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var InventorySchema = new Schema({
    productId: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
    },
    cost: {
        type: Number,
    },
    price: {
        type: Number,
    }
});


var Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;
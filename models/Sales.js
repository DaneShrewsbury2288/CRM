var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SalesSchema = new Schema({
    _id: {
        type: String,
        require: true
    },
    customerId: {
        type: Number,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    purchases: new Schema({
        productId: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
        // price per item
    }),
    created_at: {
        type: Date,
        required: true
    },
    total: {
        type: Number,
    },
    salesAgent: {
        type: String,
        required: true
    }
    // customer zip code
    // cost of storing inventory - quickbooks or ecomdash connection?
});


var Sales = mongoose.model("Sales", SalesSchema);

module.exports = Sales;
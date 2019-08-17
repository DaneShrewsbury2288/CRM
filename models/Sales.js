var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SalesSchema = new Schema({
    saleId: {
        type: Number,
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
    }),
    date: {
        type: Date,
        required: true,
    },
    total: {
        type: Number,
    },
    salesAgent: {
        type: String,
    }

});


var Sales = mongoose.model("Sales", SalesSchema);

module.exports = Sales;
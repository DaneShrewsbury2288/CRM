var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var SalesSchema = new Schema({
    SaleID: {
        type: Number,
    },
    customerName: {
        type: String,
        required: true
    },
    customerID: {
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
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SalesSchema = new Schema({
    // client id associated with the sale
    client: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Client model
            ref: "Client",
            required: true
        }
    ],
    // id of product
    productID: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Product model
            ref: "Product",
            required: true
        }
    ],
    // when the sale happened
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    // employee id associated with the sale
    user: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the User model
            ref: "User",
            required: true
        }
    ],
    // if the sale has been fulfilled
    fulfilled: {
        type: {
            Boolean,
            default: false
        },
        required: true
    }
});

var Sales = mongoose.model("Sales", SalesSchema);

module.exports = Sales;
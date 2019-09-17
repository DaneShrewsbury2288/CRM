const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SupplySchema = new Schema({
    name: {
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
    }
});

const Supply = mongoose.model("Supply", SupplySchema);

module.exports = Supply;

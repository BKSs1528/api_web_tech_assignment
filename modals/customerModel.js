const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    customer_name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    }
})

const customerModel = new mongoose.model("customer",customerSchema)

module.exports = customerModel;

const mongoose = require("mongoose")


const inventorySchema = new mongoose.Schema({
    product_id:{
        type : String,
        required : true,
        unique:true
    },
    product_type: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    available_quantity: {
        type: Number,
        required: true
    }
})

const inventoryModel = new mongoose.model("inventory", inventorySchema)


module.exports = inventoryModel;

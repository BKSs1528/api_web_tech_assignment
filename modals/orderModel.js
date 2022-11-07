const mongoose = require("mongoose")


const orderSchema= new mongoose.Schema({
    customer_id:{
        type : String,
        required : true,
        unique:true
    },
    product_id:{
        type : String,
        required : true,
        unique:true
    },
    product_name:{
        type : String,
        required : true
    },
    quantity:{
        type : Number,
        required : true
    }
})

const orderModel = new mongoose.model("orders",orderSchema)

module.exports = orderModel;
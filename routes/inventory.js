const express = require("express");
const { send } = require("process");
const inventoryModel = require("../modals/inventoryModel")
const orderModel = require("../modals/orderModel")
const router = express.Router();

router.post("/product", (req, res) => {
    inventoryModel.find({ product_id: req.body.product_id }).then((data) => {
        if (data.length) {
            const quantity = (data[0].available_quantity) + (req.body.available_quantity)
            inventoryModel.updateOne({ product_id: req.body.product_id }, { $set: { available_quantity: quantity } }).then((data) => {
                res.status(200).send("Add ed sucessfully")
            }).catch((err) => {
                res.status(400).send(err)
            })
        }else{
            inventoryModel.create({
                product_id:req.body.product_id,
                product_type:req.body.product_type,
                product_name:req.body.product_name,
                available_quantity:req.body.available_quantity
            }).then((inventoryData)=>{
                res.status(200).send({inventoryData})
            }).catch((err)=>{
                res.status(400).send({err})
            })
        }
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.get("/viewproduct",(req,res)=>{
    inventoryModel.find().then((data)=>{
        res.status(200).send({data:data})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})


module.exports = router

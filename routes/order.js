const express = require("express")
const router = express.Router()
const orderModel = require("../modals/orderModel")
const inventoryModel = require("../modals/inventoryModel")


router.post("/order", (req, res) => {
    inventoryModel.find({ product_id: req.body.product_id }).then((data) => {
        if (data.length) {
            const available = data[0].available_quantity
            if (available > quantity) {
                orderModel.create({
                    customer_id: req.body.customer_id,
                    product_id: req.body.product_id,
                    product_name: req.body.product_name,
                    quantity: req.body.quantity
                }).then(() => {
                    const setquantity = available - req.bosy.quantity

                    inventoryModel.updateOne({ product_id: req.body.product_id }, { $set: { available_quantity: setquantity } }).then(() => {
                        res.status(200).send("Order Placed scucessfully")
                    }).catch((err) => {
                        res.status(400).send(err.message)
                    })
                }).catch((err) => {
                    res.status(400).send(err.message)
                })
            } else {
                res.status(400).send("Given quantity greater than the available quantity")
            }
        } else {
            res.status(400).send("no such inventory found")
        }
    }).catch((err) => {
        res.status(400).send(err.message)
    })
})

router.get("/viewOrder", (req, res) => {
    orderModel.find().then((data) => {
        res.status(200).send({ data: data })
    }).catch((err)=>{
        res.status(400).send(err)
    })
})






module.exports = router
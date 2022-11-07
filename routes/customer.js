const express = require("express")
const router = express.Router()
const customerModel = require("../modals/customerModel")

router.post("/customer", async (req, res) => {
    try {
        customerModel.find({ email: req.body.email }).then((data) => {
            if (data.length) {
                res.status(400).send(`${data} already exists`)
            } else {
                customerModel.create({
                    customer_name: req.body.customer_name,
                    email: req.body.email
                }).then((userData) => {
                    res.status(200).json({ userData })
                }).catch((err) => {
                    res.status(400).send(err)
                })
            }
        }).catch((err) => {
            res.status(400).send(err)
        })
    } catch (err) {
        res.status(400).send(err)
    }
})


router.get("/viewCustomer",async(req,res)=>{
    customerModel.find().then((data)=>{
        res.status(200).send({data:data})
    })
})






module.exports = router

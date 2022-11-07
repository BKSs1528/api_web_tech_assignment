const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({extended:false}));



const url = "mongodb://localhost:27017/inventory"

mongoose.connect(url,{useNewUrlParser: true},(err)=>{
    if(!err){
        console.log("connected to DB");
    }else{
        console.log(err);
    }
})

const port = process.env.PORT || 3000
app.listen(port,(err)=>{
    if(!err){
        console.log(`server running on ${port}`);
    }else{
        console.log(err);
    }
})

app.get("/",(req,res)=>{
    res.send("API working")
})



app.use("/user",require("./routes/customer"))
app.use("/order",require("./routes/order"))
app.use("/inventory",require("./routes/inventory"))
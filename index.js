const express = require('express')
const mongoose = require("mongoose")
const app = express()
const db = require("./models")

db.mongoose.connect("mongodb://0.0.0.0:27017/ProjetVao2",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("connect to database");
}).catch((err)=>{
    console.log(err);
    process.exit()
})

const PORT = process.env.PORT || 8080
app.listen(PORT,(req,res)=>{
        console.log("mande ilay serveur");
})



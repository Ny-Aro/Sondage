const mongoose = require("mongoose")
const arsSchema = new mongoose.Schema({
    titre : {
        type : String,
        required : true
    },
    questions : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Question'
    }]
},{
    timestamps : true
})
const Ars = mongoose.model("Ars",arsSchema)

module.exports = Ars



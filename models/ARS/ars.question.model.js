const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    question : {
        type : String
    },
    option : [{
        type : String
    }]
},{
    timestamps : true
})
const Question = mongoose.model("question",questionSchema)

module.exports = Question



const mongoose = require("mongoose")

const sensibilisationSchema = new mongoose.Schema({
    etage : {
        type : String,
        required : true
    },
    quartDeTravail : {
        type : String,
        required : true
    },
    themeSensibilisation  : {
        type : String,
        required : true        
    },
    nbPersSensibilise : {
        type : Number,
        required :true
    },
    reference : {
        type : String,
        required : true
    },
    nomIntervenant:{
        type : String,
        required: true
    }
},{
    timestamps : true
})

const Sensibilisation = mongoose.model("Sensibilisation",sensibilisationSchema)

module.exports = Sensibilisation
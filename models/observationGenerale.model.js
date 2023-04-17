const mongoose = require("mongoose")

const observationGeneraleSchema = new mongoose.Schema({
    etage : {
        type : String,
        required : true
    },
    quartDeTravail : {
        type : String,
        required : true
    },
    descriptionObservation  : {
        type : String,
        required : true        
    },
    pointFort : {
        type : String,
        required :true
    },
    pointAmeliorer : {
        type : String,
        required : true
    },
    recommendation: {
        type : String,
        required : true
    },
    dateProchainSuivi :{
        type : Date,
        required: true
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

const observationGenerale = mongoose.model("observationGenerale",observationGeneraleSchema)

module.exports = observationGenerale
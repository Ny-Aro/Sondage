const mongoose = require("mongoose")

const observationParticulierSchema = new mongoose.Schema({
    etage : {
        type : String,
        required : true
    },
    nom : {
        type : String,
        required : true
    },
    position : {
        type : String,
        required : true
    },
    quartDeTravail : {
        type : String,
        required : true
    },
    descriptionObservation : {
        type : String,
        required : true
    },
    pointFort : {
        type : String,
        required : true
    },
    pointAmeliorer : {
        type : String,
        required : true
    },
    recommandation : {
        type : String,
        required : true
    },
    dateProchainSuivi : {
        type : Date,
        required : true
    },
    reference : {
        type : String,
        required : true
    },
    nomIntervenant : {
        type : String,
        required : true
    }
},{
    timestamps : true
})
const observationParticulier = mongoose.model("observationParticulier",observationParticulierSchema)

module.exports = observationParticulier
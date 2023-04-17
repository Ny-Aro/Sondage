const mongoose = require("mongoose")

const arsResponseSchema = new mongoose.Schema({
    etageIntervention:{
        type : String,
        required : true
    },
    quartDeTravail : {
        type : String,
        required : true
    },
    nom : {
        type : String,
        required : true
    },
    numeroEmployee :{
        type : String,
        required : true
    },
    posteOccupe :{
        type : String,
        required : true
    },
    chefUnite:{
        type : String,
        required : true
    },
    unite : {
        type : String,
        required : true
    },
    commentaireSuperviseur : {
        type : String
    },
    pointFort : {
        type : String
    },
    pisteAmelioration : {
        type : String
    },
    commentaireEmployee : {
        type : String
    },
    idArs : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Ars'
    },
    responses : [{
        idQuestion : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Question'
        },
        valeur : {
            type : Boolean
        }
    }]
})    

const ArsResponse = mongoose.model("ArsResponse",arsResponseSchema)

module.exports = ArsResponse
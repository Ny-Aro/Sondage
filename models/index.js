const mongoose = require("mongoose")
var db ={}

db.observationGenerale = require("./observationGenerale.model")
db.observationParticulier = require("./observationParticulier.model")
db.sensibilisation = require("./sensibilisation.model")
db.ars = require("./ARS/ars.model")
db.arsQuestion = require("./ARS/ars.question.model")
db.arsResponse = require("./ARS/ars.response.model")
db.mongoose = mongoose

module.exports = db
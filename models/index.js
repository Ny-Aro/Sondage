const mongoose = require("mongoose")
const db ={}
db.sensibilisation = require("./sensibilisation.model")
db.Ars = require("./ars.model")
db.mongoose = mongoose

module.exports = db
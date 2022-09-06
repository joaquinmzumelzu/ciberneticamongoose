const mongoose = require('../mongo.js')
const {Schema} = mongoose;

const ServicesSchema = new Schema({
name: {type: String, required :true},
value: {type: Number, required :true},
description: {type: String, required :true},
img: {type: String, required :true, default:'https://www.iberlibro.com/buscar-libro/titulo/psycho-cybernetics/autor/maxwell-maltz/'},
})

const Service = mongoose.model('Service', ServicesSchema )
module.exports = Service

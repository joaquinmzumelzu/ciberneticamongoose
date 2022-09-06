const mongoose = require('../mongo.js')
const {Schema} = mongoose;

const SalesSchema = new Schema({
    userId: {type: mongoose.ObjectId, required :true},
    serviceId: {type: mongoose.ObjectId, required :true},
    date: {type: Date, required :true, default: Date.now},
})

const Sale = mongoose.model('Sale', SalesSchema )
module.exports = Sale

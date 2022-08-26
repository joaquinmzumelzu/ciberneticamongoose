const mongoose = require('../mongo.js')
const {Schema} = mongoose;

const UsersSchema = new Schema({
name: {type: String, required :true},
nameId: {type: String, required :true},
oficialName: {type: String, required :true},
flagImg: {type: String, required :true},
continent: {type: String, required :true},
capitalCity: {type: String, required :false},
subRegion: {type: String, required :true},
area: {type: String, required :true},
population: {type: Number, required :true},
})

const User = mongoose.model('User', UsersSchema )
module.exports = User

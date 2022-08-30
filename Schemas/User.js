const mongoose = require('../mongo.js')
const {Schema} = mongoose;

const UsersSchema = new Schema({
name: {type: String, required :true},
email: {type: String, required :true},
password: {type: String, required :false},
nickname: {type: String, required :false},
bannerImg: {type: String, required :false},
profileImg: {type: String, required :false},
})

const User = mongoose.model('User', UsersSchema )
module.exports = User

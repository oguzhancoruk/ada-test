const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = Promise

//create schema

const UserSchema = new Schema({
    userName: {}

})

const User = mongoose.model('User', UserSchema)

module.exports = User
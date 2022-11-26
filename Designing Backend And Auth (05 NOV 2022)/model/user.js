// Design Schema for user

// ineuron approach 
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        default: null,
    },
    lastname: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true,
    },
    password:{
        type:String
    },
    token: String // if has only one property

})

module.exports = mongoose.model("user",userSchema);


// mongodb approach
// import mongoose from 'mongoose';
// const { Schema } = mongoose;
// const blogSchema = new Schema({
// })
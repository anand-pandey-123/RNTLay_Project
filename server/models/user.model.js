const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    location : {
        type:String,
        required:true
    },
    // image:{
    //     type:String,
    //     // required:true
    // },
    rentedItems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ],
}, {timestamps:true});

const User = mongoose.model('User', userSchema);
module.exports = User;
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    isRented:{
        type:Boolean,
        default:false
    },
    rentedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    rentedAt:{
        type:Date,
        default:Date.now()
    },
    totalDays:{
        type:Number,
        default:1
    },
    createdBy : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
}, {timestamps:true});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
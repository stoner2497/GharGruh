const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PropertySchema = new Schema({
    users: {
       type:String,
       required:true
    },
    Name:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    alternateNumber:{
        type:Number,
    },
    Address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    DaysToVisit:{
        type:String,
        required:true
    },
    TimeToVisit:{
        type:String,
        required:true
    },
    negotiable:{
        type:String,
        required:true
    },
    // furnished:{
    //     type:Boolean,
    //     required:true
    // },
    PriceOfProperty:{
        type:Number,
        required:true
    },
    parking:{
        type:String,
        requied:true
    },
    rooms:{
        type:String,
        required:true
    },
    masterbedroom:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    area:{
        type:Number,
        required:true
    }
    // nearbyThings:{
    //     type:String,
    //     required:true
    // }
})

module.exports = Property = mongoose.model('property',PropertySchema)
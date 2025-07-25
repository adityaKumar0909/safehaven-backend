const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    lastLocationDuringTracking:{
        lat:{
            type:Number,
        },
        lon:{
            type:Number,
        }
    },
    uuid:{
        type:String,
        required:true,
    },
    emergencyContacts:[
        String
    ]

})

const User = mongoose.model('User', userSchema);
module.exports = User;

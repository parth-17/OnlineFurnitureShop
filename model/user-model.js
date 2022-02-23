const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    firstName:{
        type:String,required:true
    },
    email:{
        type:String
    },
    password:{
        type:String, required: true
    },

    //foreign key
    role : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    }
})

const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel
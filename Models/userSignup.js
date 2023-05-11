const mongoose= require('mongoose')

const SignupSchema = mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    date:{
        required: true,
        type: String
    },
    gender:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    phone:{
        required: true,
        type: Number
    },
    address:{
        required: true,
        type: String
    }
    
})
module.exports= mongoose.model("usersignup", SignupSchema)
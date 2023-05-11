const mongoose= require('mongoose')

const addDoctors = mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    gender:{
        required: true,
        type: String
    },
    phone:{
        required: true,
        type: Number
    }
})
module.exports= mongoose.model("addDoctors", addDoctors)
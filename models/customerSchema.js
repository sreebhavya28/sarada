const mongoose=require('mongoose')


const customerSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    CreatedAt:{
        type:Date,
        default:Date.nows
    }
})

module.exports=mongoose.model('customerinfo',customerSchema)
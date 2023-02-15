const express =require("express")
const ejs =require("ejs")
const mongoose=require("mongoose")
const customerSchema=require("./models/customerSchema")
const bodyParser=require("body-parser")




mongoose.set('strictQuery', false)
mongoose.connect("mongodb://127.0.0.1:27017/sarada").then(()=>{
    console.log("db is connected")
})



const app=express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.post("/login",async(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    const newcust=await customerSchema.create({
        email,password
    })
    res.render('newcustomer',{user:newcust})
})


app.get("/", (req, res) => {
    res.render("login")
})



app.listen(3000,()=>{
    console.log("server is running")
})
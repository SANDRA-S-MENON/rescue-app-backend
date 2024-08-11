const Express= require("express")
const Mongoose= require("mongoose")
const Bcrypt= require("bcrypt")
const Cors= require("cors")
const jsonwebtoken= require("jsonwebtoken")
const loginModel = require("./models/admin")




let app =Express()
app.use(Cors())
app.use(Express.json())


Mongoose.connect("mongodb+srv://sandras02:sandrasmenon@cluster0.3g103sn.mongodb.net/rescueappDb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/adminSignUp",(req,res)=>{
    let input=req.body
    let hashedpassword=Bcrypt.hashSync(input.password,10)
    input.password=hashedpassword
    console.log(input)
    let result=new loginModel(input)
    result.save()
    res.json({"status":"success"})
})







app.listen(5050,()=>{
    console.log("server started")
})
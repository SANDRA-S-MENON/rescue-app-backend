const Express= require("express")
const Mongoose= require("mongoose")
const Bcrypt= require("bcrypt")
const Cors= require("cors")
const jsonwebtoken= require("jsonwebtoken")




let app =Express()



app.get("/",(res,req)=>{
    res.send("hello")

})
app.listen(5050,()=>{
    console.log("server started")
})
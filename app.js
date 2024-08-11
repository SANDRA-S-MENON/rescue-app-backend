const express= require("express")
const mongoose= require("mongoose")
const bcrypt= require("bcrypt")
const cors= require("cors")
const jsonwebtoken= require("jsonwebtoken")




let app =Express()



app.get("/",(res,req)=>{
    res.send("hello")

})
app.listen(5050,()=>{
    console.log("server started")
})
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



app.post("/adminSignIn",(req,res)=>{
    let input=req.body
    let result=loginModel.find({username:input.username}).then((response)=>{
        if (response.length>0) {
            const validator=Bcrypt.compareSync(input.password,response[0].password)
            if (validator) {
                jsonwebtoken.sign({email:input.username},"rescue-app",{expiresIn:"1d"},(error,token)=>{
if (error) {
    res.json({"status":"token created failed"})

} else {
    res.json({"status":"success","token":token})
    

}
                })
                
            } else {
                res.json({"status":"Wrong passsword is entered"})

            }

        } else {
            res.json({"status":"username does not exist"})
        }
    })

})




app.post("/addData",(req,res)=>{
    let input=req.body
    let token=req.headers.token
    jsonwebtoken.verify(token,"rescue-app",(error,decoded)=>{
        if (decoded && decoded.email) {
            let result=new dataModel(input)
            result.save()
            res.json({"status":"success"})
        } else {
            res.json({"status":"invalid authentication"})

        }
    })
})








app.listen(5050,()=>{
    console.log("server started")
})
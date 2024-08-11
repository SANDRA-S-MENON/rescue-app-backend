const Mongoose= require("mongoose")


const loginSchema = Mongoose.Schema(
    {
        name:String,
        username:String,
        password:String
    }
)

var loginModel=Mongoose.model("adminlogin",loginSchema)
module.exports=loginModel
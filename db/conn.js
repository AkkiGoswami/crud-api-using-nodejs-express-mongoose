const mongoose =require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/student')
.then(()=>{console.log("Database Connected")})
.catch((err)=>{console.log("Database not connected");});
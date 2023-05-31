const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/backendapi")
.then(()=>{
    console.log("connection successfully");
}).catch((err)=>{
    console.log(err);
})
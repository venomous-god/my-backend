import express from "express";
const app = express();
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.sendfile("./index.html");
})
app.listen(40000,()=>{
    console.log("server started");
})
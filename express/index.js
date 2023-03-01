const express = require("express");

console.log(express);
const app = express();

app.get("/",(req,res)=>{
    res.send("hi this is first express");
})
app.get("/about",(req,res)=>{
    res.send("hi this is first about express");
})
app.get("/contact",(req,res)=>{
    res.send("hi this is first contact express");
})

app.listen(3000,()=>{
    console.log("server established");
})
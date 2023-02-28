const http = require("http");
const fs = require("fs");


const server =http.createServer((req,res)=>{

    const jsonData = fs.readFileSync("api.json","utf-8");
    const objData = JSON.parse(jsonData);
    

    if(req.url===("/")){
        res.end("this is my first node js server");
    }
    else if(req.url===("/download")){
        res.end(" this is my first download page");
    }
    else if(req.url===("/about")){
        res.end(objData[0].name);
    }
    else{
        res.end("<h1>404: not found</h1>")
    }
    
})

server.listen(3000,()=>{
    console.log("server listening port no 3000");
})
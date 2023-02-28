const fs = require("fs");

// fs.writeFile("file.txt","dat is added to file ",()=>{
//     console.log("data is added successfully");
// })
//console.log("non blockin(async)");

// const b=fs.writeFileSync("file2.txt","dat is added to file");
// console.log(b)

// console.log(" blocking(sync)");

// fs.readFile("file.txt","utf-8",(err,data)=>{
//    console.log(data);
// })

// fs.readFile("file.txt","utf-8",(err,data)=>{
//     console.log(err);
//  })

//  //append file

//  fs.appendFile("file.txt","data is already added",(err)=>{
//     console.log(err);
//  })


// fs.rename("file.txt","pathan.txt",(err)=>{
//     //file.txt replace by pathan.txt
//     console.log(err);
// })

fs.unlinkSync("file2.txt");//it deleted file2.txt

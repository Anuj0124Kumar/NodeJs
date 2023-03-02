const express = require("express");
const path = require("path");
const app = express();

// const pathdir=path.join(__dirname,'public');
// app.use(express.static(pathdir))

app.set("view engine", "ejs");

console.log(app.get("view engine"));
console.log(path.join(__dirname), "views");

app.get("/", (req, res) => {
  // res.sendFile(`${pathdir}/inde.html`);
  res.render("inde",{
   title:"index"
  });
});
app.get("/about", (req, res) => {
  // res.sendFile(`${pathdir}/home.html`);
});
app.get("/download", (req, res) => {
  // res.download(`${pathdir}/inde.html`)
});

app.listen(3000, () => {
  console.log("server established");
});

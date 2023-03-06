const express = require("express")
const router = express.Router();
const middleware = require("../middleware");
router.use(middleware);

router.get("/", (req, res) => {
   // console.log(req.query);
    // res.sendFile(`${pathdir}/inde.html`);
    res.render("inde",{
     title:"index"
    });
  });
  router.get("/about", (req, res) => {
    // res.sendFile(`${pathdir}/home.html`);
  });
  router.get("/download", (req, res) => {
    // res.download(`${pathdir}/inde.html`)
  });

  module.exports = router;
const express = require("express");
const router = express.Router();

//POST data from product items

let dataArr = [];

router.post("/shopping-cart", async (req, res) => {
  let data = await req.body.data;
  await dataArr.push(data);
  console.log(dataArr);
});
router.get("/shopping-cart", async (req, res) => {
  await res.render("shopping-cart", { products: dataArr });
});

module.exports = router;

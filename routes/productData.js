const express = require("express");
const router = express.Router();

//POST data from product items
let items = [];
let itemId = 1;
router.post("/shopping-cart", async (req, res) => {
  let data = await req.body.data;
  await items.push({ ...data, id: itemId++ });
  console.log(items);
});
router.get("/shopping-cart", async (req, res) => {
  await res.render("shopping-cart", { products: items });
});

router.post("/shopping-cart/delete", (req, res) => {
  const itemId = Number(req.body.itemId);
  console.log(itemId);
  items = items.filter((item) => item.id !== itemId);
  res.redirect("/shopping-cart");
});
module.exports = router;

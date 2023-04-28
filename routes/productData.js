const express = require("express");
const router = express.Router();
const Order = require("../schema/order");
const mongoose = require("mongoose");

//POST data from product items
let items = [];
let itemId = 1;
router.post("/", async (req, res) => {
  let data = await req.body.data;
  await items.push({ ...data, id: itemId++ });
});
router.get("/", async (req, res) => {
  res.set("Cache-Control", "no-store");
  await res.render("shopping-cart", { products: items });
});

router.post("/delete", (req, res) => {
  const itemId = Number(req.body.itemId);
  items = items.filter((item) => item.id !== itemId);
  res.redirect("/shopping-cart");
});
router.post("/order", (req, res) => {
  const itemsTotal = req.body.total;
  res.set("Cache-Control", "no-store");
  res.render("order", { total: itemsTotal });
});

router.post("/finish-order", async (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const adress = req.body.adress;
  const notes = req.body.optional;
  const priceTotal = parseInt(req.body.orderFullPrice);
  let object = { name, phone, email, adress, notes, priceTotal, items };

  try {
    await Order.create(object);
    console.log(items);
  } catch (err) {
    console.log(err);
  }
  items = [];
  res.render("shopping-cart", { products: items });
});

module.exports = router;

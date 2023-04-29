const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//routers
const reviewRouter = require("./routes/reviews");
const productRouter = require("./routes/productData");
const contactRouter = require("./routes/questions");
require("dotenv").config();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//use routers
app.use("/reviews", reviewRouter);
app.use("/shopping-cart", productRouter);
app.use("/contact", contactRouter);

//database

const uri = process.env.MONGODB_URI;
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connectet to Database");
  } catch (err) {
    console.log(err);
  }
}
connect();

//Link routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/products", (req, res) => {
  res.render("products");
});

//Products links

app.get("/centrale-pe-lemne", (req, res) => {
  res.render("./product-items/centrale-lemne");
});
app.get("/centrale-pe-peleti", (req, res) => {
  res.render("./product-items/centrale-peleti");
});
app.get("/centrale-pe-gaz", (req, res) => {
  res.render("./product-items/centrale-gaz");
});
app.get("/centrale-electrice", (req, res) => {
  res.render("./product-items/centrale-electrice");
});

app.get("/boilere", (req, res) => {
  res.render("./product-items/boilere");
});
app.get("/pompe-de-caldura", (req, res) => {
  res.render("./product-items/pompe-caldura");
});
app.get("/panouri-solare", (req, res) => {
  res.render("./product-items/panouri-solare");
});

app.get("/calorifere", (req, res) => {
  res.render("./product-items/calorifere");
});
app.get("/accesorii", (req, res) => {
  res.render("./product-items/accesorii");
});

//newsletter

const newsletterEmails = [];

app.post("/", (req, res) => {
  const email = req.body.email;
  newsletterEmails.push(email);
  console.log(newsletterEmails);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server has started");
});

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  adress: {
    type: String,
    require: false,
  },
  notes: {
    type: String,
    required: false,
  },
  priceTotal: {
    type: Number,
    required: false,
  },
  items: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("Order", orderSchema);

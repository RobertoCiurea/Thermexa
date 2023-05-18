const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  permission: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Review", reviewSchema);

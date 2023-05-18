const express = require("express");
const router = express.Router();
const Review = require("../schema/review");
const mongoose = require("mongoose");

//review page

router.post("/", async (req, res) => {
  try {
    //create new collection
    const review = await new Review({
      //retrieve data from client side
      name: req.body.name,
      rating: req.body.rating,
      comment: req.body.comment,
      permission: req.body.allowed,
    });
    // console.log(review);
    //saving data in collection
    await review.save();
    res.set("Cache-Control", "no-store");
    await res.render("review-message");
  } catch (err) {
    console.log(err);
  }
});
//find the review and sending to client side
router.get("/", async (req, res) => {
  try {
    const reviewFound = await Review.find({ permission: { $eq: "allowed" } });
    // console.log(reviewFound);

    res.render("reviews", { reviews: reviewFound });
  } catch (err) {
    console.log(err);
  }

  // await Review.findOne({ date: 1 }, (err, reviews) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.render("reviews", { reviews: reviews });
  //   }
  // });
});

module.exports = router;

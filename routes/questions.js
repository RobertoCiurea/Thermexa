const express = require("express");
const router = express.Router();
const Question = require("../schema/question");
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
  try {
    const question = await new Question({
      name: req.body.name,
      email: req.body.email,
      question: req.body.question,
    });

    await question.save();
    res.redirect("/question-succes");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

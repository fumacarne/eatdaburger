const express = require('express');
const router = express.Router();
const burger = require("../models/burger")

router.get("/", async (req, res) => {
  let allBurgers = await burger.all();
  res.render("index", { burgers: allBurgers });
});

module.exports = router;
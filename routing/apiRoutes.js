const express = require('express');
const router = express.Router();
const burger = require("../models/burger");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/burgers", (req, res) => {
    res.status(201).json({ result: burger.create(req.body) });
})

router.post("/burgers/devour", (req, res) => {
    res.status(201).json({ result: burger.devour(req.body.id) });
})

module.exports = router;
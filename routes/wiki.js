const express = require("express");
const router = express.Router();
const { addPage } = require("../views");

router.get("/", async (req, res, next) => {
  try {
    res.send();
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.send();
  } catch (err) {
    next(err);
  }
});

router.get("/add", async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (err) {
    next(err);
  }
});

module.exports = router;

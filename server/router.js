const express = require('express');
const router = express.Router();
const { postCow, getCows } = require("./controllers")

router.get("/cows", getCows)
router.post("/cows", postCow)

module.exports = router;
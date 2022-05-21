const express = require("express");
const router = new express.Router();
const kingController = require('../controllers/king.controller');

router.get("/getKing",kingController.getKing);


module.exports = router;
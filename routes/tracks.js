const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const {validatorCreateItem} = require("../validator/tracks")
const {getItems, getItem, createItem} = require("../controllers/tracks.js")

router.get("/", getItems)

router.post("/", validatorCreateItem, customHeader, createItem)
  
module.exports = router
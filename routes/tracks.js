const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const {validatorCreateItem, validatorGetItem} = require("../validator/tracks")
const {getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks.js")

router.get("/", getItems)

router.get("/:id", validatorGetItem, getItem)

router.post("/", validatorCreateItem, createItem)

router.put("/:id", validatorGetItem, validatorCreateItem, updateItem)

router.delete("/:id", validatorGetItem, deleteItem)
  
module.exports = router
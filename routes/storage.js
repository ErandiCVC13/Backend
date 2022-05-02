const express = require("express")
const router = express.Router()
const {createItem, getItems} = require( "../controllers/storage.js")
const uploadMiddelware = require("../utils/handleStorage.js")

router.get("/", getItems)
router.post("/", uploadMiddelware.single("myFile"), createItem)

module.exports= router
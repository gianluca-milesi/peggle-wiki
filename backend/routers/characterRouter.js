const express = require("express")
const router = express.Router()
const characterController = require("../controllers/characterController.js")


//Index
router.get("/", characterController.index)

//Show
router.get("/", characterController.index)

//Store
router.post("/", characterController.index)

//Destroy
router.delete("/", characterController.index)

module.exports = router
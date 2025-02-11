const express = require("express")
const router = express.Router()

const reviewController = require("../controllers/reviewController.js")


//Index
router.get("/", reviewController.index)

//Store
router.post("/", reviewController.store)

module.exports = router
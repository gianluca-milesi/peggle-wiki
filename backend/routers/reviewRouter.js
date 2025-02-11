const express = require("express")
const router = express.Router()

const reviewController = require("../controllers/reviewController.js")

const validateReview = require("../middlewares/validateReview.js")


//Index
router.get("/", reviewController.index)

//Store
router.post("/", validateReview, reviewController.store)

module.exports = router
const express = require("express")
const router = express.Router()

const characterController = require("../controllers/characterController.js")
const reviewController = require("../controllers/reviewController.js")


//Index
router.get("/", characterController.index)

//Show
router.get("/:id", characterController.show)

//ShowReviews
router.get("/:id/reviews", reviewController.getReviewsByCharacter)

//Store
router.post("/", characterController.store)

//Destroy
router.delete("/:id", characterController.destroy)

module.exports = router
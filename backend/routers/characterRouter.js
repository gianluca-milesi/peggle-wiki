const express = require("express")
const router = express.Router()
const characterController = require("../controllers/characterController.js")


//Index
router.get("/", characterController.index)

//Show
router.get("/:id", characterController.show)

//Store
router.post("/", characterController.store)

//Destroy
router.delete("/:id", characterController.destroy)

module.exports = router
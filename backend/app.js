const express = require("express")
const app = express()
const PORT = 3000

const cors = require("cors")
app.use(cors({ origin: process.env.CORS_ORIGIN }))

app.use(express.static("public"))
app.use(express.json())

const characterRouter = require("./routers/characterRouter.js")
const reviewRouter = require("./routers/reviewRouter.js")
app.use("/api/characters", characterRouter)
app.use("/api/reviews", reviewRouter)

const notFound = require("./middlewares/notFound.js")


app.get("/", (req, res) => {
    res.send("Root")
})

app.use(notFound)

app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`)
})
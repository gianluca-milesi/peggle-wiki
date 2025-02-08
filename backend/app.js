const express = require("express")
const app = express()
const PORT = 3000

app.use(express.static("public"))

const characterRouter = require("./routers/characterRouter.js")
app.use("/api/characters", characterRouter)


app.get("/", (req, res) => {
    res.send("Root")
})



app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`)
})
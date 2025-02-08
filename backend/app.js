const express = require("express")
const app = express()
const PORT = 3000


app.get("/", (req, res) => {
    res.send("Root")
})



app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`)
})
const connection = require("../data/db.js")


//Index
function index(req, res) {
    const sql = `SELECT * FROM reviews`

    connection.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }

        res.json(results)
    })
}

//Show
function getReviewsByCharacter(req, res) {
    const id = parseInt(req.params.id)

    const sql = `SELECT * FROM reviews WHERE character_id = ?`

    connection.query(sql, [id], (err, results) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }

        res.json(results)
    })
}

//Store
function store(req, res) {
    const { character_id, name, review, vote } = req.body

    const sql = `INSERT INTO reviews (character_id, name, review, vote) VALUES (?, ?, ?, ?)`

    connection.query(sql, [character_id, name, review, vote], (err, results) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }
        res.status(201).json({ message: "Review added" })
    })

}

//Destroy
function destroy(req, res) {

}

module.exports = { index, getReviewsByCharacter, store, destroy }
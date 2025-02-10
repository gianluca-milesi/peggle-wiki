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
    const id = req.params.id

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

}

//Destroy
function destroy(req, res) {

}

module.exports = { index, getReviewsByCharacter, store, destroy }
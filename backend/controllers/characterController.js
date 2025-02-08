const connection = require("../data/db.js")

//Index
function index(req, res) {
    const sql = `
        SELECT characters.*, COALESCE(AVG(reviews.vote), 0) AS avgVote
        FROM characters
        LEFT JOIN reviews ON characters.id = reviews.character_id
        GROUP BY characters.id;
        `

    connection.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }

        res.json(results)
    })
}

//Show
function show(req, res) {
    const id = req.params.id

    const sql = `
        SELECT characters.*, COALESCE(AVG(reviews.vote), 0) AS avgVote
        FROM characters
        LEFT JOIN reviews ON characters.id = reviews.character_id
        WHERE character_id = ?
        GROUP BY characters.id;
        `

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message })
        if (results.length === 0) {
            res.status(400).json({
                error: "Character not found",
                message: "Personaggio non trovato"
            })
        }

        const character = results[0]
        res.json(character)
    })
}

//Store
function store(req, res) {

}

//Destroy
function destroy(req, res) {

}

module.exports = { index, show, store, destroy }
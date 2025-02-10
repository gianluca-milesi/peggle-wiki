const connection = require("../data/db.js")

//Index
function index(req, res) {
    let sql = `
        SELECT characters.*, COALESCE(AVG(reviews.vote), 0) AS avgVote
        FROM characters
        LEFT JOIN reviews ON characters.id = reviews.character_id
        `

    const params = []

    if (req.query.search) {
        sql += ` WHERE characters.name LIKE ? OR characters.power LIKE ?`
        params.push(`%${req.query.search}%`, `%${req.query.search}%`)
    }

    sql += ` GROUP BY characters.id`


    connection.query(sql, params, (err, results) => {
        results.forEach((character) => {
            character.image = `${process.env.BE_HOST}/CharactersImg/${character.image}`
        })

        if (err) {
            res.status(500).json({ message: err.message })
        }

        res.json(results)
    })
}

//Show
function show(req, res) {
    const id = req.params.id

    let sql = `
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
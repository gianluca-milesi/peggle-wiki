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
    const id = parseInt(req.params.id)

    let sql = `
        SELECT characters.*, COALESCE(AVG(reviews.vote), 0) AS avgVote
        FROM characters
        LEFT JOIN reviews ON characters.id = reviews.character_id
        WHERE characters.id = ?
        GROUP BY characters.id;
        `

    connection.query(sql, [id], (err, results) => {
        results.forEach((character) => {
            character.image = `${process.env.BE_HOST}/CharactersImg/${character.image}`
        })

        if (err) {
            res.status(500).json({ message: err.message })
        }
        if (results.length === 0) {
            res.status(404).json({
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
    const { image, name, description, power } = req.body

    const sql = `INSERT INTO characters (image, name, description, power) VALUES (?, ?, ?, ?)`

    connection.query(sql, [image, name, description, power], (err, results) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }

        res.status(201).json({ message: "Character added" })
    })
}

//Destroy
function destroy(req, res) {
    const id = parseInt(req.params.id)

    let sql = `DELETE FROM characters WHERE characters.id = ?`

    connection.query(sql, [id], (err, results) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }

        if (results.length === 0) {
            res.status(404).json({
                error: "Character not found",
                message: "Personaggio non trovato"
            })
        }

        res.status(200).json({ message: "Character removed" })
    })
}

module.exports = { index, show, store, destroy }
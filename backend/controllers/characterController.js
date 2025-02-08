const connection = require("../data/db.js")

//Index
function index(req, res) {
    const sql = `SELECT * FROM characters`

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ message: err.message })
        res.json(results)
    })
}

//Show
function show(req, res) {

}

//Store
function store(req, res) {

}

//Destroy
function destroy(req, res) {

}

module.exports = { index, show, store, destroy }
function validateCharacter(req, res, next) {
    const { name, description, power } = req.body

    if (!name || !description || !power) {
        return res.status(400).json({
            error: "Invalid fields",
            message: "All fields are mandatory"
        })
    }

    next()
}

module.exports = validateCharacter
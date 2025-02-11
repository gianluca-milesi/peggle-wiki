function validateReview(req, res, next) {
    const { name, vote } = req.body

    if (!name || !vote) {
        return res.status(400).json({
            error: "Invalid fields",
            message: "Name and Vote fields are mandatory"
        })
    }

    next()
}

module.exports = validateReview
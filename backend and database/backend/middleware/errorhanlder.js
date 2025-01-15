const errorhandler = (err, req, res, next) => {
    res.json({
        error : err.message,
    })
}
module.exports = errorhandler
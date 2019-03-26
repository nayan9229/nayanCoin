module.exports = function (app) {
    app.use('/*', function (req, res, next) {
        res.status(400);
        return res.json({ error: true, message: 'No Api Found', data: null });
    });
};
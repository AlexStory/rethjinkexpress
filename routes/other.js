const db = require('../db');

module.exports = (req, res) => {
    exports.index = (req, res) => {
        db.getPeople(data => {
            res.render('index', {name: req.params.name,
                                people: data});
        });
    }
}

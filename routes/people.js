const db = require('../db');

module.exports = (req, res) => {
    db.getPeople(x => res.send(x));
}

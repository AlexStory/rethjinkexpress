const db = require('../db');

exports.index = (req, res) => {
    db.getPeople(data => {
        res.render('index', {name: 'world',
                            people: data});
    });
}

exports.other = require('./other');
exports.people = require('./people');
exports.addPerson = require('./addPerson');
exports.createPerson = require('./createPerson');

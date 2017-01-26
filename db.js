let thinky = require('thinky')();
let people = require('./models/people');
let r = thinky.r;

function getPeople(cb){
    r.table('people').run().then(d => cb(d));
}

function createPeople(person){
    const p = new people(person);
}

module.exports = {
    getPeople: getPeople
}

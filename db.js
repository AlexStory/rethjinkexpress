let thinky = require('thinky')();
let type = thinky.type;
let r = thinky.r;

function getPeople(cb){
    r.table('people').run().then(d => cb(d));
}

module.exports = {
    getPeople: getPeople
}

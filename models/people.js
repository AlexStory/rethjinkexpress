const thinky = require('thinky')();
let type = thinky.type;


let People = thinky.createModel("people", {
    id: type.string(),
    name: type.string(),
    number: type.string()
});

module.exports = People;

const express = require('express');
const path = require('path');
const route = require('./routes');
const bodyparser = require('body-parser');

let app = express();
app.use(bodyparser.urlencoded({extedned: false}));
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



// GET ROUTES
app.get('/', route.index);
app.get('/:name', route.other);
app.get('/api/people', route.people);
app.get('/person/new', route.addPerson);


//POST routes
app.post('/person/new', route.createPerson);

app.listen(8888);

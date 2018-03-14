var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();

// public folder to server
app.use(express.static('public'));
// not encoding URL because of bodyparser
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(methodOverride('_method'));
// require handlebars
var hbs = require('express-handlebars');
// handlebars is template engine, uses main as base file
app.engine('handlebars', hbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// link to burger controller
var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

// listen on port, if port undefined use 3000
app.listen(process.env.PORT || 3000);
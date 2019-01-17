var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require("morgan");

//initialize Express app
var express = require('express');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(process.cwd() + '/public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//connecting to MongoDB

// Mongoose (orm) connects to our mongo db and allows us to have access to the MongoDB commands for easy CRUD 
mongoose.connect("mongodb://heroku_f9jqr8qs:efv0pqfn8qdqhqcv7k6fr8fhg@ds161039.mlab.com:61039/heroku_f9jqr8qs");
var db = mongoose.connection;

// if any errors than console errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// display a console message when mongoose has a conn to the db
db.once("open", function () {
  console.log("Mongoose connection successful.");
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Mongoose!')
});

var routes = require('./controllers/controllers');
app.use('/', routes);

var port = process.env.PORT || 3000;

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Listening on PORT ' + port);
});


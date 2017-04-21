//: Require express
var express = require('express');
//: Require path
var path = require('path');
//: Create express app
var app = express();
//: Require body-parser module
var bodyParser = require('body-parser');
//: Integrate body-parser with app
app.use(bodyParser.urlencoded({extended: true}));
//: Configure bodyParser to read json
app.use(bodyParser.json());
//: Set up client folder Directory
app.use(express.static(path.join(__dirname, './client')));
//: Set up bower components folder Directory
app.use(express.static(path.join(__dirname, './bower_components')));
//: Require mongoose config file which does the rest for us
require('./server/config/mongoose.js');
//: Store the routes function in a variable
var routes_setter = require('./server/config/routes.js');
//: Invoke the routes function and pass it the app variable
routes_setter(app);
//: Set server to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

//Functions
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//Route
var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('To-Do list RESTful API server started on: ' + port);


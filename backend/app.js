var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var usersRouter = require('./routes/userRoutes');
var bookmarkRoutes = require('./routes/bookmarkRoutes');
var app = express();

app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', usersRouter);
app.use('/users', bookmarkRoutes);
app.use(function(req, res, next) {
    next(createError(404 ,"location '"+ req.url + "' not found"));
});


module.exports = app;
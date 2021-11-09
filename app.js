const cors = require ('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var exercisesRouter = require('./routes/exercises');
var itemsRouter = require ('./routes/items');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
<<<<<<< HEAD
app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);
app.use('/items', itemsRouter);
||||||| parent of b3b03ab (NavBar Setup)
app.use('/users', usersRouter);
=======
app.use('/users', usersRouter)
>>>>>>> b3b03ab (NavBar Setup)

module.exports = app;

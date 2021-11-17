const cors = require ('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var exercisesRouter = require('./routes/exercises');
var itemsRouter = require ('./routes/items');
var teachersRouter = require ('./routes/teachers');
var studentsRouter = require ('./routes/students');
var scoresRouter = require ('./routes/scores');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);
app.use('/items', itemsRouter);
<<<<<<< HEAD
=======
app.use('/users', usersRouter)

>>>>>>> d3de03f26bb1576d2679de48641613688bd8eaac
app.use('/teachers', teachersRouter);
app.use('/students', studentsRouter);
app.use('/scores', scoresRouter);


module.exports = app;

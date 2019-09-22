require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

// require router
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var workRouter = require('./routes/work');
var estateRouter = require('./routes/estate');
// var create_tbRouter = require('./routes/create_tb');

var app = express();

// make session
app.use(session({
    secret: '24doors backend',
    resave: false,
    saveUninitialized: true
}));

// view engine setup (For test)
console.log('Dir:', __dirname);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set router (backend API)
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/work', workRouter);
app.use('/estate', estateRouter);

// Only use for creating DB
// app.use('/create_tb', create_tbRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

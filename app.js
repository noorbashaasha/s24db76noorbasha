var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var fords = require('./model/fords');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const fordsRouter = require('./routes/fords');
const gridRouter = require('./routes/grid');
var resourceRouter = require('./routes/resource')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fords', fordsRouter);
app.use('/grid', gridRouter);
app.use('/resource',resourceRouter);
app.get('/randomitem', function (req, res) {
  res.render('randomitem', { title: 'A random item' });
});
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

async function recreateDB(){
// Delete everything
await fords.deleteMany();
  let instance1 = new fords({ name: 'Mustang', price: '2214000', year: 2021 });
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
 
  let instance2 = new fords({ name: ' Fusion', price: '1968000', year: 2022 });
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
 
  let instance3 = new fords({ name: 'Fiesta', price: '1312000', year: 2023 });
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
 
}
 
let reseed= true;
if(reseed){recreateDB();}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

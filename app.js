// Import required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
 
var fords = require('./models/fords');
 
async function recreateDB() {
  await fords.deleteMany();
 
  let instance1 = new
    fords({
      fords_name: "Toyota", fords_price: '40000',
      fords_year: 2022
    });
  instance1.save().then(doc => {
    console.log("First object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  let instance2 = new
    fords({
      fords_name: "Honda", fords_price: '90',
      fords_year: 2021
    });
  instance2.save().then(doc => {
    console.log("Second object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  let instance3 = new
    fords({
      fords_name: "Suzuki", fords_price: '3999',
      fords_year: 2021
    });
  instance3.save().then(doc => {
    console.log("Third object saved")
  }
  ).catch(err => {
    console.error(err)
  });
}
  let reseed = true;
if (reseed) { recreateDB();
}
 
 
 
// Import route files
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const fordsRouter = require('./routes/fords'); // Import fords router
const gridRouter = require('./routes/grid');
const resourceRouter = require('./routes/resource');
 
// Create Express app
var app = express();
 
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
 
// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
// Route registration
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fords', fordsRouter); // Use fordsRouter for /fords routes
app.use('/grid', gridRouter);
app.get('/randomitem', function (req, res) {
  res.render('randomitem', { title: 'A random item' });
});
app.use('/resource', resourceRouter);
 
// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 
// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});
 
module.exports = app;
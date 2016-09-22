var express    = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var Sequelize  = require('sequelize');
var fs         = require('fs');
var bcrypt     = require('bcryptjs');
var session    = require('express-session');
var passport   = require('./config/ppConfig.js');
var flash      = require('connect-flash');
var db         = require("./models");
var app        = express()
var isLoggedIn = require('./middleware/isLoggedIn.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(session({
  secret: 'naaaa nananana nananana nanana nana naaa',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req, res, next) {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', function(req, res) {
  db.event.findAll().then(function(data) {
    res.render('index' , {data: data})
  });
});

app.get('/loggedIn', function(req, res) {
  res.redirect('/profile');
});


app.get('/profile', isLoggedIn, function(req, res) {
  db.event.findAll({
    where:{
      userID: req.user.email
    }
}).then(function(events){
  res.render('profile', {events: events}
  )});

});

app.use('/auth', require('./controllers/auth.js'));

app.listen(3000);

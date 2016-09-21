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

app.get('/', function(req, res) {
  var events = fs.readFileSync('data.json');
  events = JSON.parse(events);
  res.render('index', {theEvents: events});
});

app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});

app.use('/auth', require('./controllers/auth.js'));

app.listen(3000);

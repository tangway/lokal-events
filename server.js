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
var method     = require('method-override');
var app        = express();
var isLoggedIn = require('./middleware/isLoggedIn.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(method('_method'));

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
    // res.json(data)
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
  // console.log(events);
  res.render('profile', {events: events}
  )});

});

app.get('/newEvent', function(req, res) {
  res.render('newEvent')
  }
)

app.get('/event/:id', function(req, res) {
  db.event.find({
  where: {id: req.params.id }

}).then(function(events) {
   res.render('edit', {events: events} )
  // user will be an instance of User and stores the content of the table entry with id 2. if such an entry is not defined you will get null

  });

 }
)

app.put('/events/:id', function(req, res) {
  db.event.update ({
  title: req.body.title,
  date: req.body.date,
  venue: req.body.venue,
  time: req.body.time,
  type: req.body.type,
  description: req.body.description

  }, {
  where: {
    id: req.params.id
  }
}).then(function(events) {
  console.log(events);
   res.redirect('/')
  // do something when done updating
  });
 }
)

app.delete('/events/:id', function (req, res) {
  db.event.destroy({
  where: { id: req.params.id }
}).then(function() {
  res.redirect('/profile')
});
 }
)



app.post('/newEvent', function(req, res) {
  //debug code (output request body)
  console.log(req.body);
  // res.send(req.body);

  db.event.create({
  title: req.body.title,
  date: req.body.date,
  venue: req.body.venue,
  time: req.body.time,
  type: req.body.type,
  description: req.body.description,
  imageurl: req.body.imageurl,
  userID: req.body.email

}).then(function(events) {

  db.event.findAll({
    where:{
      userID: req.body.email
    }
}).then(function(events){
  res.redirect('profile')
  // res.render('profile', {events: events}
  });
  // console.log("#Look >>>>>", events);
  // console.log("#Look >>>>>", events.get());
  // var getEvent = events.get()
  // res.json(events);
  // res.render('profile', getEvent)
});
});


// app.post('/profile', function(req, res) {
//   //debug code (output request body)
//   // console.log(req.body);
//   // res.send(req.body);
//
//   db.event.create({
//   title: req.body.title,
//   date: req.body.date,
//   venue: req.body.venue,
//   time: req.body.time,
//   type: req.body.type,
//   description: req.body.description,
//   imageurl: req.body.imageurl,
//   userID: req.body.userID
//
// }).then(function(events) {
//
//   db.event.findAll({
//     where:{
//       userID: req.user.userID
//     }
// }).then(function(events){
//   res.render('profile', {events: events}
//   )});
//   // console.log("#Look >>>>>", events);
//   // console.log("#Look >>>>>", events.get());
//   // var getEvent = events.get()
//   // res.json(events);
//   // res.render('profile', getEvent)
// });
// });

app.use('/auth', require('./controllers/auth.js'));

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('server running on port 3000');
})
module.exports = server;

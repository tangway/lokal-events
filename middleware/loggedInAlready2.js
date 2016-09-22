module.exports = function(req, res, next) {
  if (req.user) {
    req.flash('error', 'You already logged in lah');
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = function(req, res, next) {
  if (req.user) {
    req.flash('error', 'Pls log out to sign up another account');
    res.redirect('/');
  } else {
    next();
  }
};

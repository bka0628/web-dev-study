const User = require('../models/user.model');

function getSignup(req, res) {
  res.render('customer/auth/signup');
}

async function signup(req, res) {
  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city
  );

  await user.signup();

  res.redirect('login');
}

function getlogin(req, res) {
  res.render('customer/auth/login');
}

function login(req, res) {
  //...
}

module.exports = {
  getSignup: getSignup,
  signup: signup,
  getlogin: getlogin,
  login: login,
};

function getSignup(req, res) {
  res.render('customer/auth/signup');
}

function signup(req, res) {
  //...
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

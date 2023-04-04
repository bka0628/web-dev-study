function getSignup(req, res) {
  res.render('customer/auth/signup');
}

function getlogin(req, res) {
  res.render('customer/auth/login');
}

module.exports = {
  getSignup: getSignup,
  getlogin: getlogin,
};

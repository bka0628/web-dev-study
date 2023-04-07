function getSessionData(req) {
  const sessionDatad = req.session.flashedData;

  req.session.flashedData = null;

  return sessionDatad;
}

function flashDataToSession(req, data, action) {
  req.session.flashedData = data;
  req.session.save(action);
}

module.exports = {
  getSessionData: getSessionData,
  flashDataToSession: flashDataToSession,
};

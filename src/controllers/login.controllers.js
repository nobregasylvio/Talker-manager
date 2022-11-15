const createToken = require('../models/token.models');
const { HTTP_OK_STATUS } = require('../utils/httpStatus');

function login(req, res) {
  const token = createToken();
  return res.status(HTTP_OK_STATUS).json(token);
}

module.exports = login;

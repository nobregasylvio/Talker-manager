const { HTTP_UNAUTHORIZED_STATUS } = require('../utils/httpStatus');
const { authorizationMessage } = require('../utils/messages');

function authorizationValidation(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: authorizationMessage.empty });
  }

  const MIN_CHARACTER = 16;
  const isValid = authorization.length < MIN_CHARACTER;

  if (isValid) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({
      message: authorizationMessage.invalidFormat,
    });
  }


  next();
}

module.exports = {
  authorizationValidation,
};

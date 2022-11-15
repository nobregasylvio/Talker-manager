const { HTTP_UNAUTHORIZED_STATUS, HTTP_BAD_REQUST_STATUS } = require('../utils/httpStatus');
const { authorizationMessage, nameMessage } = require('../utils/messages');

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

function nameValidation(req, res, next) {
  const { name } = req.body;

  if (!name) return res.status(HTTP_BAD_REQUST_STATUS).json({ message: nameMessage.empty });

  const MIN_CHARACTER = 3;
  const isValid = name.length < MIN_CHARACTER;

  if (isValid) {
    return res.status(HTTP_BAD_REQUST_STATUS).json({ message: nameMessage.invalidFormat });
  }

  next();
}

module.exports = {
  authorizationValidation,
  nameValidation,
};

const { HTTP_UNAUTHORIZED_STATUS, HTTP_BAD_REQUST_STATUS } = require('../utils/httpStatus');
const { authorizationMessage, nameMessage, ageMessage, talkMessage } = require('../utils/messages');

function authorizationValidation(req, res, next) {
  const { authorization } = req.headers;
  const { empty, invalidFormat } = authorizationMessage;

  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: empty });
  }

  const MIN_CHARACTER = 16;
  const isValid = authorization.length < MIN_CHARACTER;

  if (isValid) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: invalidFormat });
  }

  next();
}

function nameValidation(req, res, next) {
  const { name } = req.body;
  const { empty, invalidFormat } = nameMessage;

  if (!name) return res.status(HTTP_BAD_REQUST_STATUS).json({ message: empty });

  const MIN_CHARACTER = 3;
  const isValid = name.length < MIN_CHARACTER;

  if (isValid) {
    return res.status(HTTP_BAD_REQUST_STATUS).json({ message: invalidFormat });
  }

  next();
}

function ageValidation(req, res, next) {
  const { age } = req.body;
  const { empty, invalidFormat } = ageMessage;

  if (!age) return res.status(HTTP_BAD_REQUST_STATUS).json({ message: empty }); 
  
  const MIN_AGE = 18;
  const isValid = age < MIN_AGE;

  if (isValid) {
    return res.status(HTTP_BAD_REQUST_STATUS).json({ message: invalidFormat });
  }

  next();
}

function talkValidation(req, res, next) {
  const { talk } = req.body;

  if (!talk) return res.status(HTTP_BAD_REQUST_STATUS).json({ message: talkMessage }); 

  next();
}

module.exports = {
  authorizationValidation,
  nameValidation,
  ageValidation,
  talkValidation,
};

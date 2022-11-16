const { HTTP_UNAUTHORIZED_STATUS, HTTP_BAD_REQUST_STATUS } = require('../utils/httpStatus');
const { authorizationMessage, nameMessage, ageMessage, talkMessage, watchedAtMessage } = require('../utils/messages');

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

function watchedAtValidation(req, res, next) {
  const { watchedAt } = req.body.talk;
  const { empty, invalidFormat } = watchedAtMessage;

  if (!watchedAt) return res.status(HTTP_BAD_REQUST_STATUS).json({ message: empty }); 

  const formatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  const isValid = formatDate.test(watchedAt);

  if (!isValid) return res.status(HTTP_BAD_REQUST_STATUS).json({ message: invalidFormat }); 

  next();
}


module.exports = {
  authorizationValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
};

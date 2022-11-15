const { HTTP_BAD_REQUST_STATUS } = require('../utils/httpStatus');
const { emailMessage, passwordMessage } = require('../utils/messages');

const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

function emailValidation(req, res, next) {
  const { email } = req.body;
  const isValid = regexEmail.test(email);

  if (!email) return res.status(HTTP_BAD_REQUST_STATUS).json({ message: emailMessage.empty });
  if (!isValid) {
    return res.status(HTTP_BAD_REQUST_STATUS).json({ message: emailMessage.invalidFormat });
  }

  next();
}

function passwordValidation(req, res, next) {
  const { password } = req.body;

  if (!password) return res.status(HTTP_BAD_REQUST_STATUS).json({ message: passwordMessage.empty });

  const MIN_CHARACTER = 6;
  const isValid = password.length < MIN_CHARACTER;

  if (isValid) {
    return res.status(HTTP_BAD_REQUST_STATUS).json({ message: passwordMessage.invalidFormat });
  }

  next();
}

module.exports = {
  emailValidation,
  passwordValidation,
};

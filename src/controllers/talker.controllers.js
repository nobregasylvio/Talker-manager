const talker = require('../models/talker.models');
const { HTTP_OK_STATUS } = require('../utils/httpStatus');

async function allTalker(_req, res) {
  const speaker = await talker();
  return res.status(HTTP_OK_STATUS).json(speaker);
}

module.exports = allTalker;

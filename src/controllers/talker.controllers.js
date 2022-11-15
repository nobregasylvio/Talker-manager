const { talker, writeTalker } = require('../models/talker.models');
const { HTTP_OK_STATUS, HTTP_CREATED_STATUS } = require('../utils/httpStatus');

async function allTalker(_req, res) {
  const speaker = await talker();
  return res.status(HTTP_OK_STATUS).json(speaker);
}

async function addTalker(req, res) {
  const newPerson = req.body;
  const allTalkers = await writeTalker(newPerson);
  const lastTalker = allTalkers[allTalkers.length - 1];

  return res.status(HTTP_CREATED_STATUS).json(lastTalker);
}

module.exports = { allTalker, addTalker };

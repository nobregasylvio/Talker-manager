const { talker, writeTalker } = require('../models/talker.models');
const { HTTP_OK_STATUS, HTTP_CREATED_STATUS } = require('../utils/httpStatus');

async function allTalker(_req, res) {
  const speaker = await talker();
  return res.status(HTTP_OK_STATUS).json(speaker);
}

async function addTalker(req, res) {
  const newPerson = req.body;
  const oldTalker = await talker();

  const id = oldTalker.length + 1;
  const newTalker = { id, ...newPerson };

  const allTalkers = await writeTalker(newTalker);
  const lastTalker = allTalkers[allTalkers.length - 1];

  return res.status(HTTP_CREATED_STATUS).json(lastTalker);
}

module.exports = { allTalker, addTalker };

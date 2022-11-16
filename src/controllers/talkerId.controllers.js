const { talker, deleteTalker } = require('../models/talker.models');
const { talkerIdMessage } = require('../utils/messages');
const {
  HTTP_ERROR_STATUS,
  HTTP_OK_STATUS,
  HTTP_NO_CONTENT_STATUS,
} = require('../utils/httpStatus');

async function talkerId(req, res) {
  const speaker = await talker();

  const { id } = req.params;
  const speakerId = speaker.find((people) => people.id === +id);

  if (!speakerId) {
    res.status(HTTP_ERROR_STATUS).json({ message: talkerIdMessage });
  }

  return res.status(HTTP_OK_STATUS).json(speakerId);
}

async function deleteTalkerId(req, res) {
  const { id } = req.params;
  await deleteTalker(id);

  return res.status(HTTP_NO_CONTENT_STATUS).json();
}

module.exports = { talkerId, deleteTalkerId };

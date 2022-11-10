const talker = require('../models/talker.models');

const HTTP_OK_STATUS = 200;
const HTTP_ERROR_STATUS = 404;

async function talkerId(req, res) {
  const speaker = await talker();

  const { id } = req.params;
  const speakerId = speaker.find((people) => people.id === +id);

  if (!speakerId) {
    res.status(HTTP_ERROR_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(HTTP_OK_STATUS).json(speakerId);
}

module.exports = talkerId;

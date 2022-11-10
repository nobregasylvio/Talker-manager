const express = require('express');
const bodyParser = require('body-parser');
const talker = require('./models/talker.models');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const HTTP_ERROR_STATUS = 404;
const PORT = '3000';

// Não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => {
  res.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const speaker = await talker();
  return res.status(HTTP_OK_STATUS).json(speaker);
});

app.get('/talker/:id', async (req, res) => {
  const speaker = await talker();
  const { id } = req.params;
  const talkerId = speaker.find((people) => people.id === +id);

  if (!talkerId) {
    res.status(HTTP_ERROR_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(HTTP_OK_STATUS).json(talkerId);
});

app.listen(PORT, () => {
  console.log('Online');
});

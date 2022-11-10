const express = require('express');
const bodyParser = require('body-parser');
const talker = require('./models/talker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// Não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_request, response) => {
  const speaker = await talker();
  return response.status(HTTP_OK_STATUS).json(speaker);
});

app.listen(PORT, () => {
  console.log('Online');
});

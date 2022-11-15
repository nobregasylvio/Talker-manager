const express = require('express');
const bodyParser = require('body-parser');
const allTalker = require('./controllers/talker.controllers');
const talkerId = require('./controllers/talkerId.controllers');
const login = require('./controllers/login.controllers');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// Não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => {
  res.status(HTTP_OK_STATUS).send();
});

app.get('/talker', allTalker); 
app.get('/talker/:id', talkerId);
app.post('/login', login);

app.listen(PORT, () => {
  console.log('Online');
});

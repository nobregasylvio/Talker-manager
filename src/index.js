const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const { HTTP_OK_STATUS } = require('./utils/httpStatus');

const app = express();
app.use(bodyParser.json());
app.use(routes);

const PORT = '3000';

// Não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => {
  res.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

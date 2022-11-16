const express = require('express');
const login = require('../controllers/login.controllers');
const { allTalker, addTalker } = require('../controllers/talker.controllers');
const talkerId = require('../controllers/talkerId.controllers');
const { passwordValidation, emailValidation } = require('../middlewares/login.middlewares');
const {
  authorizationValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
} = require('../middlewares/talker.middlewares');

const routes = express.Router();

routes.get('/talker', allTalker); 
routes.get('/talker/:id', talkerId);

routes.post('/login', emailValidation, passwordValidation, login);
routes.post('/talker', authorizationValidation,
                      nameValidation,
                      ageValidation,
                      talkValidation,
                      watchedAtValidation,
                      rateValidation,
                      addTalker);

module.exports = routes;

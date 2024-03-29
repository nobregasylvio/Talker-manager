const express = require('express');
const login = require('../controllers/login.controllers');
const { allTalker, addTalker, searchTalker } = require('../controllers/talker.controllers');
const { talkerId, deleteTalkerId } = require('../controllers/talkerId.controllers');
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

routes.get('/talker/search', authorizationValidation, searchTalker);

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

routes.delete('/talker/:id', authorizationValidation, deleteTalkerId);

module.exports = routes;

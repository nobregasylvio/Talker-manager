const express = require('express');
const login = require('../controllers/login.controllers');
const allTalker = require('../controllers/talker.controllers');
const talkerId = require('../controllers/talkerId.controllers');
const { passwordValidation, emailValidation } = require('../middlewares/login.middlewares');

const routes = express.Router();

routes.get('/talker', allTalker); 
routes.get('/talker/:id', talkerId);
routes.post('/login', emailValidation, passwordValidation, login);

module.exports = routes;

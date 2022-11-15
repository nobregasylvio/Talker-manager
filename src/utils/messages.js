const emailMessage = {
  empty: 'O campo "email" é obrigatório',
  invalidFormat: 'O "email" deve ter o formato "email@email.com"',
};

const passwordMessage = {
  empty: 'O campo "password" é obrigatório',
  invalidFormat: 'O "password" deve ter pelo menos 6 caracteres',
};

module.exports = { emailMessage, passwordMessage };

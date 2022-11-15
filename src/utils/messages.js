const emailMessage = {
  empty: 'O campo "email" é obrigatório',
  invalidFormat: 'O "email" deve ter o formato "email@email.com"',
};

const passwordMessage = {
  empty: 'O campo "password" é obrigatório',
  invalidFormat: 'O "password" deve ter pelo menos 6 caracteres',
};

const authorizationMessage = {
  empty: 'Token não encontrado',
  invalidFormat: 'Token inválido',
};

const nameMessage = {
  empty: 'O campo "name" é obrigatório',
  invalidFormat: 'O "name" deve ter pelo menos 3 caracteres',
};

const ageMessage = {
  empty: 'O campo "age" é obrigatório',
  invalidFormat: 'A pessoa palestrante deve ser maior de idade',
};

module.exports = {
  emailMessage,
  passwordMessage,
  authorizationMessage,
  nameMessage,
  ageMessage,
};

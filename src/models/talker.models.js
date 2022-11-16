const fs = require('fs/promises');
const path = require('path');

const talkerPath = path.resolve(__dirname, '..', 'talker.json');

async function talker() {
  try {
    const data = await fs.readFile(talkerPath);
    const result = JSON.parse(data);
    return result;
  } catch (err) {
    return `Erro ao ler o arquivo: ${err.message}`;
  }
}

async function writeTalker(newPerson) {
  try {
    const oldTalker = await talker();
    const id = oldTalker.length + 1;
    const newTalker = { id, ...newPerson };
    oldTalker.push(newTalker);

    await fs.writeFile(talkerPath, JSON.stringify(oldTalker, null, 2));

    return oldTalker;
  } catch (err) {
    return `Erro ao Escrever o Arquivo: ${err.message}`;
  }
}

async function deleteTalker(id) {
  try {
    const oldTalker = await talker();
    const newTalker = oldTalker.filter((object) => object.id !== +id);

    return await fs.writeFile(talkerPath, JSON.stringify(newTalker, null, 2));
  } catch (err) {
    return `Erro ao Escrever o Arquivo: ${err.message}`;
  }
}

module.exports = {
  talker,
  writeTalker,
  deleteTalker,
};

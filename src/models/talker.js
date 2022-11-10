const fs = require('fs/promises');
const path = require('path');

async function talker() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '..', 'talker.json'));
    const result = JSON.parse(data);
    return result;
  } catch (err) {
    return `Erro ao ler o arquivo: ${err.message}`;
  }
}

module.exports = talker;

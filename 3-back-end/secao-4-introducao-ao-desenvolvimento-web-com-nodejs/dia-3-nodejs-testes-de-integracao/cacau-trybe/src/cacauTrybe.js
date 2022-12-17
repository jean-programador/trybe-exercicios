const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacuTrybe = await readCacauTrybeFile();
  return cacuTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter(
    (chocolate) => chocolate.brandId === brandId,
  );
};

const getTotalChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  const { chocolates } = cacauTrybe;
  return chocolates.length;
};

const getChocolatesByName = async (name) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolates = cacauTrybe.chocolates.filter((where) =>
    where.name.includes(name),
  );
  return chocolates;
};

const writeCacauTrybeFile = async (content) => {
  const path = '/files/cacauTrybeFile.json';
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    console.error('Erro ao salvar arquivo', error.message);
    return null;
  }
};

const updateChocolate = async (id, chocolateEdited) => {
  const cacauTrybeFile = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybeFile.chocolates.find(
    (chocolate) => chocolate.id === id,
  );
  if (chocolateToUpdate) {
    cacauTrybeFile.chocolates = cacauTrybeFile.chocolates.map((chocolate) => {
      if (chocolate.id === id) return { ...chocolate, ...chocolateEdited };
      return chocolate;
    });
    await writeCacauTrybeFile(cacauTrybeFile);
    return { ...chocolateToUpdate, ...chocolateEdited };
  }
  return false;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getTotalChocolates,
  getChocolatesByName,
  updateChocolate,
};

const fs = require('fs').promises;

async function showSimpsonsById() {
  const simpsonsResponse = await fs.readFile('./simpsons.json');
  JSON.parse(simpsonsResponse).forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
}

async function GetById(id) {
  const simpsonsResponse = await fs.readFile('./simpsons.json');
  const simpson = JSON.parse(simpsonsResponse).find(
    (where) => Number(where.id) === Number(id)
  );

  if (!simpson) throw new Error('Id não encontrado');
  else console.log(simpson.name);
}

async function removeSimpsons() {
  const simpsonsResponse = await fs.readFile('./simpsons.json');
  const simpsonsFiltered = JSON.parse(simpsonsResponse).filter(
    (where) => ![10, 6].includes(Number(where.id))
  );
  await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFiltered));
}

async function simpsonsFamily() {
  const simpsonsResponse = await fs.readFile('./simpsons.json');
  const simpsonsFamily = JSON.parse(simpsonsResponse).filter((where) =>
    [1, 2, 3, 4].includes(Number(where.id))
  );
  const createSimpsonsFamily = await fs.writeFile(
    './simpsonsFamily.json',
    JSON.stringify(simpsonsFamily)
  );
}

async function addNelsonMuntz() {
  const simpsonsResponse = await fs.readFile('./simpsonsFamily.json');
  const dataParse = JSON.parse(simpsonsResponse);
  const nelsonMuntz = {
    id: '5',
    name: 'Nelson Muntz',
  };
  const addNelsonMuntz = [...dataParse, nelsonMuntz];
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(addNelsonMuntz));
}

async function replaceNelsonToMaggie() {
  const simpsonsResponse = await fs.readFile('./simpsonsFamily.json');
  const addMagguie = JSON.parse(simpsonsResponse).map((simpson) => {
    if (simpson.id === '5') {
      simpson.name = 'Maggie Simpson';
    }
    return simpson;
  });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(addMagguie));
}

module.exports = {
  showSimpsonsById,
  GetById,
  removeSimpsons,
  simpsonsFamily,
  addNelsonMuntz,
  replaceNelsonToMaggie,
};

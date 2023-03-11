const {
  showSimpsonsById,
  GetById,
  removeSimpsons,
  simpsonsFamily,
  addNelsonMuntz,
  replaceNelsonToMaggie,
} = require('./readFiles');

async function main() {
  await showSimpsonsById(); // - Exercício 6 - A
  await GetById(50); // - Exercício 6 - B
  await removeSimpsons(); // - Exercício 6 - C
  await simpsonsFamily(); // - Exercício 6 - D
  await addNelsonMuntz(); // - Exercício 6 - E
  await replaceNelsonToMaggie(); // Exercício 6 - F
}

main();

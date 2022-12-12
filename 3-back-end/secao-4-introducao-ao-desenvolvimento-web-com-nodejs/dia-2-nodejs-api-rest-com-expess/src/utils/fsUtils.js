const fs = require('fs').promises;

async function readMoviesData() {
  try {
    const readMovies = await fs.readFile('./src/movies.json');
    const movies = JSON.parse(readMovies);
    return movies;
  } catch (error) {
    console.error(error.message);
  }
}

async function GetById(id) {
  const moviesResponse = await fs.readFile('./src/movies.json');
  const movie = JSON.parse(moviesResponse).find(
    (where) => Number(where.id) === Number(id),
  );

  if (!movie) throw new Error('Id não encontrado');
  return movie;
}
module.exports = {
  readMoviesData,
  GetById,
};

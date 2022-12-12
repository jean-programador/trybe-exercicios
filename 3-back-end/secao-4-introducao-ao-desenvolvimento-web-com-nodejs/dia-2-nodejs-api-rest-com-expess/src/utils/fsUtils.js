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

async function getById(id) {
  const moviesResponse = await fs.readFile('./src/movies.json');
  const movie = JSON.parse(moviesResponse).find(
    (where) => Number(where.id) === Number(id),
  );

  if (!movie) throw new Error('Id não encontrado');
  return movie;
}

async function addMovie(newMovie) {
  try {
    const readMovies = await fs.readFile('./src/movies.json');
    const movies = JSON.parse(readMovies);
    const lastId = movies.find((_, index) => index === movies.length - 1);
    movies.push({ id: lastId.id + 1, ...newMovie });

    fs.writeFile('./src/movies.json', JSON.stringify(movies));
  } catch (error) {
    console.error(error.message);
  }
}
module.exports = {
  readMoviesData,
  getById,
  addMovie,
};

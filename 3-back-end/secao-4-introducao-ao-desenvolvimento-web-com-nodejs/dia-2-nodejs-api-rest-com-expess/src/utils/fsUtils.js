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
  const moviesResponse = await readMoviesData();
  const movie = moviesResponse.find((where) => Number(where.id) === Number(id));

  if (!movie) throw new Error('Id não encontrado');
  return movie;
}

async function addMovie(newMovie) {
  const movies = await readMoviesData();
  const lastId = movies.find((_, index) => index === movies.length - 1);
  movies.push({ id: lastId.id + 1, ...newMovie });

  try {
    fs.writeFile('./src/movies.json', JSON.stringify(movies));
    console.log('Movie added sucessfull');
  } catch (error) {
    console.error(error.message);
  }
}

async function editMovie(id, newInformation) {
  const movies = await readMoviesData();
  const updateMovieInformation = { id: Number(id), ...newInformation };
  const updatedMovies = movies.reduce((moviesList, currentMovie) => {
    if (currentMovie.id === updateMovieInformation.id) {
      return [...moviesList, updateMovieInformation];
    }
    return [...moviesList, currentMovie];
  }, []);

  try {
    fs.writeFile('./src/movies.json', JSON.stringify(updatedMovies));
    console.log('Movie updated sucessfull');
  } catch (error) {
    console.error(error.message);
  }
}

async function deleteMovie(id) {
  const movies = await readMoviesData();
  const newListMovies = movies.filter((where) => where.id !== Number(id));

  try {
    fs.writeFile('./src/movies.json', JSON.stringify(newListMovies));
    console.log('Movie deleted sucessfull');
  } catch (error) {
    console.error(error.message);
  }
}

async function filterByName(filter) {
  const moviesResponse = await readMoviesData();
  const filteredMovies = moviesResponse.filter((where) =>
    where.movie.includes(filter),
  );

  if (filteredMovies.length > 0) {
    console.log('Search Results:');
    return filteredMovies;
  }
  console.log('Not Found Movies');
  return [];
}
module.exports = {
  readMoviesData,
  getById,
  addMovie,
  editMovie,
  deleteMovie,
  filterByName,
};

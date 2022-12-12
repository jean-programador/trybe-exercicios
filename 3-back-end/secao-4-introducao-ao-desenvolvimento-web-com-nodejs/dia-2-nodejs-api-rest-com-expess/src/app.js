const express = require('express');
const { getById, readMoviesData, addMovie } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await getById(id);

  res.status(200).json(movie);
});

app.get('/movies', async (req, res) => {
  const movie = await readMoviesData();

  res.status(200).json(movie);
});

app.post('/movies/add', async (req, res) => {
  const newMovie = { ...req.body };
  await addMovie(newMovie);

  res.status(201).json(newMovie);
});

module.exports = app;

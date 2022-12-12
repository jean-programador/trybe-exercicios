const express = require('express');
const { GetById } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await GetById(id);

  res.status(200).json(movie);
});

module.exports = app;

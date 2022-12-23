const express = require('express');
const morgan = require('morgan');
require('express-async-errors');
const {
  validateName,
  validatePrice,
  validateDescription,
  validateFormatDate,
  validateRating,
  validateDifficulty,
} = require('./validations');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(
  validateName,
  validatePrice,
  validateDescription,
  validateFormatDate,
  validateRating,
  validateDifficulty,
);

app.post('/activities', (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;

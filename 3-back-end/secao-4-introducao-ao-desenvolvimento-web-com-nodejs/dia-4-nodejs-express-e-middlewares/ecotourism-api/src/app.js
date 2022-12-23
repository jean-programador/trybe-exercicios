const express = require('express');
const morgan = require('morgan');
const crypto = require('crypto');
require('express-async-errors');
const {
  validateName,
  validatePrice,
  validateDescription,
  validateFormatDate,
  validateRating,
  validateDifficulty,
} = require('./validationsActivies');
const { validateAuthentication } = require('./validationsSignUp');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.post('/signup', validateAuthentication, async (_req, res) => {
  const tokenHex = await crypto.randomBytes(8);
  res.status(200).json({ token: tokenHex.toString('hex') });
});

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

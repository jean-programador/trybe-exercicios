const express = require('express');
const morgan = require('morgan');
require('express-async-errors');
const { validateName, validatePrice } = require('./validations');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(validateName, validatePrice);

app.post('/activities', (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;

const express = require('express');

const app = express();
const cacauTrybe = require('./cacauTrybe');

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

module.exports = app;

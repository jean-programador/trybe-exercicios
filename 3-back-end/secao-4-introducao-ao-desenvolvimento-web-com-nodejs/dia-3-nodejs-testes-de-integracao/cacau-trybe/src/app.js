const express = require('express');

const app = express();
const cacauTrybe = require('./cacauTrybe');

app.listen(3001, () => console.log('server running on port 3001'));

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate)
    return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.get('/chocolates/quantidade/total', async (req, res) => {
  const total = await cacauTrybe.getTotalChocolates();
  res.status(200).json({ totalChocolates: total });
});

app.get('/chocolates/pesquisa/search', async (req, res) => {
  const { name } = req.query;
  const chocolateByName = await cacauTrybe.getChocolatesByName(name);
  if (chocolateByName.length === 0) return res.status(404).json([]);
  res.status(200).json(chocolateByName);
});

module.exports = app;

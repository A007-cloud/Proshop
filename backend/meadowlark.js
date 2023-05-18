const express = require('express');
// const products = require('./data/products');
const products = require('./data/products');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('API gave response...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});

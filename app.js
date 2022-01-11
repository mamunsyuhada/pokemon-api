const http = require('http');
const express = require('express');
const log = require('morgan');
const axios = require('axios');

const app = express();
app.use(log('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', async(_, res) => {
  const { data: { results: pokemons } } = await axios({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon?limit=10',
  });

  const outputs = [];
  for(const pokemon of pokemons){
    const { name, url } = pokemon;

    const { data: { sprites: { other } } } = await axios({ method: 'get', url });
    const { front_default: image } = other['official-artwork'];
    outputs.push({
      name,
      image,
    });
  }

  return res.status(200).send(outputs);
});

const port = 3434;
const server = http.createServer(app);
server.listen(port, () => {
  const ctx = 'createServer';
  console.log(ctx, `Starting at http://localhost:${port}`);
});

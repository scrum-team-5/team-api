const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Browser');
});

app.get('/matias', (req, res) => {
  res.send('Hello Matias');
});

app.get('/cris', (req, res) => {
  res.send('Hello Cristhians');
});

app.get('/alejo', (req, res) => {
  res.send('Hello Alejandro');
});

app.get('/seth', (req, res) => {
  res.send('Hello Seth');
});

app.listen(port, () => console.log('Listening'));

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to our DevOps demo application!');
});

module.exports = app;

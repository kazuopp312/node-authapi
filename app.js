const express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
});

app.post('/api/posts', (req, res) => {
  res.json({
    message: 'Post created...'
  });
});

app.post('/api/login', (req, res) => {
  jwt.sign();
})

app.listen(5000, () => console.log('Server started on port 5000'));
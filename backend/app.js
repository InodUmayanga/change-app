const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let loginCheckModule = require('json-contain');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');

  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, POTIONS');
  console.log('got a request');

  next();
});

app.get('/api/login', (req, res, next) => {
  res.status(200).json(
    {
      message: 'request succesfully handled'
    });
});

app.post('/api/login', (req, res, next) => {
  const login = req.body;
  if (loginCheckModule.loginCheck(login)) {
    res.status(201).json({
      message: 'login successful',
      status: true
    });
  } else {
    res.status(200).json({
      message: 'login failed',
      status: false
    });
  }
});


module.exports = app;

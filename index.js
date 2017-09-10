const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/wallet');

const app = express();

var seedDB = require('./seeds');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

seedDB();

app.get('/dashboard', function(req, res) {
  res.send('hi world');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('coinocle server is running');
});

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useMongoClient: true });

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('coinocle server is running');
});

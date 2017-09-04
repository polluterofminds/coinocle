const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect('keys.mongoURI');

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('coinocle server is running');
});

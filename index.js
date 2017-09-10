const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const Wallet = require('./models/wallet');

const app = express();

var seedDB = require('./seeds');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

seedDB();

app.get('/wallets', function(req, res) {
  //  get all wallets
  Wallet.find({}, function(err, allWallets) {
    if (err) {
      console.log(err);
    } else {
      // uncomment the following code to render /index
      // res.render('wallets/index', {
      //   wallets: allWallets
      // });
      res.send('Look in the console to see the wallets');
      console.log(allWallets);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('coinocle server is running');
});

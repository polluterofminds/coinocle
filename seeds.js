const mongoose = require('mongoose');
const Wallet = require('./models/wallet');

var data = [
  { walletName: 'Tezos 1', coinType: 'Bitcoin', coinAmount: 50 },
  { walletName: 'Tezos 2', coinType: 'Bitcoin', coinAmount: 12 },
  { walletName: 'Ledger Nano S', coinType: 'Ethereum', coinAmount: 75 }
];

function seedDB() {
  Wallet.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log('removed wallets!');
    data.forEach(function(seed) {
      Wallet.create(seed, function(err, wallet) {
        if (err) {
          console.log(err);
        } else {
          console.log('added a wallet');
        }
      });
    });
  });
}

module.exports = seedDB;

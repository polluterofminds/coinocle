const mongoose = require('mongoose');
const { Schema } = mongoose;

const walletSchema = new mongoose.Schema({
  walletName: String,
  coinType: String,
  coinAmount: Number
});

module.exports = mongoose.model('Wallet', walletSchema);

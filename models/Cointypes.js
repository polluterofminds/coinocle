const mongoose = require("mongoose");
const { Schema } = mongoose;

const coinTypeSchema = new Schema({
  coinType: String,
  inUse: { type: Boolean, default: false },
  totalCoins: Number
});

module.exports = coinTypeSchema;

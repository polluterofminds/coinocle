const mongoose = require("mongoose");
const { Schema } = mongoose;

const walletsSchema = new Schema({
  title: String,
  bitcoin: String,
  ehtereum: String,
  litecoin: String,
  dateAdded: Date,
  dateUpdated: Date
});

mongoose.model("wallets", walletsSchema);

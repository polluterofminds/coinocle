const mongoose = require("mongoose");
const { Schema } = mongoose;
const CoinTypeSchema = require("./Cointypes");

const walletsSchema = new Schema({
  name: String,
  type: [CoinTypeSchema],
  bitcoin: { type: Number, default: 0 },
  ethereum: { type: Number, default: 0 },
  litecoin: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateAdded: Date,
  dateUpdated: Date
});

mongoose.model("wallets", walletsSchema);

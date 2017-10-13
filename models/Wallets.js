const mongoose = require("mongoose");
const { Schema } = mongoose;

const walletsSchema = new Schema({
  title: String,
  bitcoin: {
    type: Number,
    default: 0
  },
  ethereum: {
    type: Number,
    default: 0
  },
  litecoin: {
    type: Number,
    default: 0
  },
  _user: { type: Schema.Types.ObjectId, ref: "User"},
  dateAdded: Date,
  dateUpdated: [Date]
});

mongoose.model("wallets", walletsSchema);
module.exports = walletsSchema;

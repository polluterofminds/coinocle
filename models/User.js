const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const { Schema } = mongoose;
const walletsSchema = require("./Wallets");

const userSchema = new Schema({
  userId: String,
  displayName: String,
  email: String,
  credits: {
    type: Number,
    default: 0
  },
});

mongoose.model("users", userSchema);

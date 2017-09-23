const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Wallet = mongoose.model("wallets");

module.exports = app => {
  app.post("/api/wallets", requireLogin, requireCredits, async (req, res) => {
    const { name, type } = req.body;

    const wallet = new Wallet({
      name,
      type: type.split(",").map(coinType => ({ coinType: coinType.trim() })),
      _user: req.user.id,
      dateAdded: Date.now()
    });

    try {
      await wallet.save();
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};

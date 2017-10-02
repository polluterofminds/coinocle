const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Wallet = mongoose.model("wallets");

module.exports = app => {
  app.get("/api/wallets", requireLogin, requireCredits, async (req, res) => {
    const wallets = await Wallet.find({ _user: req.user.id });
    res.send(wallets);
  });

  app.post("/api/wallets", requireLogin, requireCredits, async (req, res) => {
    const { title, bitcoin, ethereum, litecoin } = req.body;

    const wallet = new Wallet({
      title,
      bitcoin,
      ethereum,
      litecoin,
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

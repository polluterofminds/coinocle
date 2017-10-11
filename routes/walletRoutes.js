const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Wallet = mongoose.model("wallets");

module.exports = app => {
  app.get("/api/wallets", requireLogin, requireCredits, async (req, res) => {
    const wallets = await Wallet.find({ _user: req.user.id });
    res.send(wallets);
  });

  app.get("/api/wallets/:wallet_id", async (req, res) => {
    Wallet.findById(req.params.wallet_id, function(err, wallet) {
      if (err) res.send(err);
      res.json(wallet);
    });
  });

  app.put("/api/wallets/:wallet_id", async (req, res) => {
    Wallet.findById(req.params.wallet_id, (err, wallet) => {
      if (err) {
        res.status(500).send(err);
      } else {
        wallet.title = req.body.title || wallet.title;
        wallet.bitcoin = req.body.bitcoin || wallet.bitcoin;
        wallet.ethereum = req.body.ethereum || wallet.ethereum;
        wallet.litecoin = req.body.litecoin || wallet.litecoin;

        wallet.save((err, wallet) => {
          if (err) {
            res.status(500).send(err);
          }
          res.status(200).send(wallet);
        });
      }
    });
  });

  app.delete("/api/wallets/:wallet_id", async (req, res) => {
    Wallet.remove(
      {
        _id: req.params.wallet_id
      },
      function(err, wallet) {
        if (err) res.send(err);

        res.json({ message: "Deleted!" });
      }
    );
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

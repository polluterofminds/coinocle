const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 999,
      currency: "usd",
      description: "Coinocle Monthly Subscription",
      source: req.body.id
    });

    console.log(charge);
  });
};

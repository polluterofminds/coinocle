///prod keys
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY,
  twitterConsumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  facebookClientID: process.env.FACEBOOK_APP_ID,
  facebookClientSecret: process.env.FACEBOOK_APP_SECRET
  // coinbaseClientID: process.env.COINBASE_CLIENT_ID,
  // coinbaseClientSecret: process.env.COINBASE_CLIENT_SECRET
};

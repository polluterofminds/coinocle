<<<<<<< HEAD
//keys.js
if (process.env.NODE_ENV === "production") {
  //in prod
  module.exports = require("./prod");
} else {
  //return dev keys
  module.exports = require("./dev");
=======
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
>>>>>>> 3d4cd29ade607029f35501c4e58195a8b71f13ac
}

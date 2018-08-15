if (process.env.NODE_ENV === "production") {
  //set production key
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

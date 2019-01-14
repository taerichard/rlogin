const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const logger = require("../middleware/logger");
const keys = require("../configuration/keys");

// middleware
app.use(bodyParser.json());
app.use(logger);

// mongo
const options = {
  useNewUrlParser: true
};
mongoose.connect(
  keys.mongoURI,
  options,
  err => {
    !err ? console.log("Mongoose Connection Success") : console.log(err);
  }
);
require("../routes/routes")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});

module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors"); //checking it later
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const user = require("../routes/routes");
const logger = require("../middleware/logger");

// middleware
app.use(bodyParser.json());
app.use(logger);

// mongo
const options = {
  useNewUrlParser: true
};
const mongoURI = `mongodb://meanrichard:Shibalnom1989$$@ds243054.mlab.com:43054/users_db`;
mongoose.connect(
  mongoURI,
  options,
  err => {
    !err ? console.log("Connection success") : console.log(err);
  }
);
require("../routes/routes")(app);

app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});

module.exports = app;

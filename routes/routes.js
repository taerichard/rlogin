const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/Users");

router.get("/", function(req, res) {
  res.send("User");
});

router.post("api/register", function(req, res) {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  User.create(newUser, function(err, user) {
    res.send({ newUser }).catch(err => console.log(err));
  });
});
module.exports = router;

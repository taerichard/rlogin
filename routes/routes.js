const router = require("express").Router();
const User = require("../models/Users");

// getting all users
router.get("/users", function(req, res) {
  User.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

// getting a particular user
router.get("/users/:id", function(req, res) {
  const userID = req.params.id;
  User.findById(userID)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: err });
    });
});

// updating a particular user
router.put("/users/:id", function(req, res) {
  const userID = req.params.id;
  const updatedUser = {
    name: req.body.name,
    email: req.body.email
  };
  User.findOneAndUpdate(userID, updatedUser)
    .then(updatedData => {
      res.send.status(200);
      res.send(updatedData);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/register", function(req, res) {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email
    // password: req.body.password,
  });
  newUser.save();
  console.log(newUser);
  res.end("nice");
});

router.delete("/register");

module.exports = router;

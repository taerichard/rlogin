const User = require("../models/Users");
// const uniqueUser = require("../middleware/uniqueUser.js");

module.exports = app => {
  // getting all users
  app.get("/users", function(req, res) {
    User.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
  });

  // getting a particular user
  app.get("/users/:id", function(req, res) {
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
  app.put("/users/:id", function(req, res) {
    const userID = req.params.id;
    const updatedUser = {
      name: req.body.name,
      email: req.body.email
    };
    User.findOneAndUpdate(userID, updatedUser)
      .then(updatedData => {
        res.status(200).send(updatedData);
      })
      .catch(err => {
        res.send(err);
      });
  });

  app.post("/register", function(req, res) {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    console.log("api");
    newUser
      .generateAuthToken()
      .then(savedUser => {
        console.log(savedUser);
        res.status(200).send({
          name: savedUser.name,
          email: savedUser.email,
          token: savedUser.tokens.pop().token
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).send(err);
      });
  });
  // users logging in
  // app.post("/loggin", function(req, res) {
  //   const user = {
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: req.body.password
  //   };
  //   User.find({ name: user.name, email: user.email, password: user.password })
  //     .then(user => {
  //       res.status(200).send(user);
  //     })
  //     .catch(err => {
  //       res.status(500).send({ errorMessage: err });
  //     });
  // });
  app.post("/loggin", (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
    User.find(
      { email: req.body.email, password: req.body.password },
      (err, docs) => {
        if (err) {
          res.status(400).send({ errorMessage: err });
        } else if (docs.length === 0) {
          res.send("No user was found");
        } else if (docs) {
          res.status(200).send(docs);
        }
      }
    );
  });

  // deleting users
  app.delete("/users/:id", function(req, res) {
    User.remove({ _id: req.params.id }, function(err, user) {
      if (err) {
        res.status(500).send({ errorMessage: err });
      }
      res.status(200).send({ success: user });
    });
  });
};

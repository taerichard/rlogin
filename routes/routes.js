const User = require("../models/Users");

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
    newUser
      .save()
      .then(user => {
        res.status(200).send(user);
      })
      .catch(err => {
        res.status(400).send(err);
      });
    // .then(() => {
    //   console.log("after save");
    //   return newUser.generateAuthToken();
    // })
    // .then(token => {
    //   console.log("after generateFUnction", token);
    //   res.status(200).send("success");
    // })
    // .catch(err => {
    //   res.status(400).send(err);
    // });
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

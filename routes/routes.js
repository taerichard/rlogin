const router = require("express").Router();
const User = require("../models/Users");

// getting all users
router.get("/", function(req, res) {
  User.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send("error");
    });
});

router.post("/register", function(req, res) {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email
    // password: req.body.password
  });
  newUser.save();
  console.log(newUser);
  res.end("nice");
});

// router.post("api/register", function(req, res) {
//   const user = new User(req.body);
//   user
//     .save()
//     .then(user => res.send(user))
//     .catch();
// });
module.exports = router;

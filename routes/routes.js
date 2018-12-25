const router = require("express").Router();
const User = require("../models/Users");
console.log(router);
router.get("/", function(req, res) {
  res.send({ success: "success!" });
});

// router.get("api/models", function(req, res) {
//   User.find({}, function(err, model) {
//     if (err) {
//       res.send({ err: "Error retrieving data" });
//     }
//     res.send({ message: "success", data: model });
//   });
// });
// Post
// router.post("/signup", (req, res, next), function(){
//   const newUser = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password
//   });

// // })

module.exports = router;

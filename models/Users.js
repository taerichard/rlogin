const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
  // password: {
  //   type: String,
  //   required: true
  // }
});

// UserSchema.pre("save", function(next) {
//   bcrypt
//     .hash(this.password, 10)
//     .then(hashedPassword => {
//       this.password = hashedPassword;
//       next();
//     })
//     .catch(error => {
//       throw error;
//     });
// });

module.exports = mongoose.model("userschema", UserSchema);

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  }
});

// generate Auth Token function
UserSchema.methods.generateAuthToken = function() {
  let user = this;
  let access = "auth";
  let token = jwt
    .sign({ _id: user._id.toHexString(), access }, "richard")
    .toString();
  console.log("access,", access);

  user.token = token;
  return user.save();
};

module.exports = mongoose.model("userschema", UserSchema);

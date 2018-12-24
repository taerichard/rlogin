const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // putting a empty string per each inputting areas so we can validate with our function
  data.email = isEmpty(data.email) ? "" : data.email;
  console.log(data.email);
  data.password = isEmpty(data.password) ? "" : data.password;

  // validating email checks with error messages
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // validating password check with error messages

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  console.log("errors:", errors, "isValid:", { isValid: isEmpty(errors) });
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

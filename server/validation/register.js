const validator = require("validator"); // validates and sanitizes strings only
const isEmpty = require("is-empty"); // checks if value is empty;

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // converting empty fields to an empty string so we can use validator functions;
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // validating name checks
  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // validationg email checks
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmpty(data.email)) {
    errors.email = "Email is invalid";
  }

  // validating if password1 is empty
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // validating if password2 is empty
  if (validator.isEmpty(data.password2)) {
    return (errors.password2 = "Password field is required");
  }

  // checking for both password1 and password2
  if (!validator.equals(data.password, data.password2)) {
    return (errors.password = "Password does not match");
  }

  // if any errors are contained in the object, the isValid is a boolean that checks to see errors.
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.userKey = !isEmpty(data.userKey) ? data.userKey : "";
  data.userId = !isEmpty(data.userId) ? data.userId : "";
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
// Name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name is required";
  } else if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name is required"
  }
// User Key and ID checks
if (Validator.isEmpty(data.userKey)) {
  errors.userKey = "User Key field is required";
}
if (Validator.isEmpty(data.userId)) {
  errors.userId = "User ID field is required";
}
if (!Validator.equals(data.userKey, data.userId)) {
  errors.userId = "User Key and User ID must match";
}
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
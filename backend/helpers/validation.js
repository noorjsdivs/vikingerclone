const User = require("../models/User.js");

exports.validationEmail = (email) => {
  return String(email)
    .toLocaleLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

exports.validateLengh = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};

exports.validateUsername = async (username) => {
  let a = false;

  do {
    let check = await User.findOne({ username });
    if (check) {
      username += (+new Date() * Math.random()).toString().substring(0, 1);
      a = true;
    } else {
      a = false;
    }
  } while (a);
  return username;
};

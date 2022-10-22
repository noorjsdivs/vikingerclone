const { json } = require("express");
const bcrypt = require("bcrypt");
const {
  validationEmail,
  validateLengh,
  validateUsername,
} = require("../helpers/validation.js");
const User = require("../models/User.js");
const { sendEmailVerification } = require("../helpers/mailer.js");

try {
  exports.register = async (req, res) => {
    const {
      first_name,
      last_name,
      email,
      password,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    //================  Email validation start here ==============
    if (!validationEmail(email)) {
      return res.status(400).json({ message: "Invalid Email address!" });
    }

    //=========== Email user validation ============

    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res
        .status(400)
        .json({ message: "This Email already exits, try differnt Email!" });
    }
    //================  Email validation end here ==============
    //================  User name text length start here ============
    if (!validateLengh(first_name, 3, 30)) {
      return res
        .status(400)
        .json({ message: "First name must between 3 to 30 Chracters!" });
    }
    if (!validateLengh(last_name, 3, 30)) {
      return res
        .status(400)
        .json({ message: "Last name must between 3 to 30 Chracters!" });
    }
    //================  User name text length end here ==============
    //======  Pasword bcrypting and length check start here =========
    if (!validateLengh(password, 6, 40)) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 Chracters!" });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);

    //======  Pasword bcrypting and length check end here =========

    // ============= username generate start here ================
    const tempUserName = first_name + last_name;
    const newUserName = await validateUsername(tempUserName);
    // ============= username generate end here ================

    const user = await new User({
      first_name,
      last_name,
      email,
      password: cryptedPassword,
      username: newUserName,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    const url = `${process.env.BASE_URL}/activate/`;
    sendEmailVerification(user.email, user.first_name, url);

    res.json(user);
  };
} catch (error) {
  res.status(500).json({ message: error.message });
}

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const FB = require("fb");
const User = require("../models/user");

module.exports = {
  signUp: (req, res) => {
    let { username, email, password } = req.body;

    User.create({
      username,
      email,
      password
    })
      .then(newUser => {
        res.status(200).json({
          message: "account succesfully registered",
          username,
          email
        });
      })

      .catch(err => {
        return res.status(400).json({
          msg: err.message
        });
      });
  },

  signIn: (req, res) => {
    let { email, password } = req.body;

    User.find({ email })
      .then(user => {
        if (user) {
          bcrypt.compare(password, user.password, function(err, match) {
            let token = jwt.sign(
              {
                id: user._id,
                email: user.email
              },
              "asik"
            );
            res.status(200).json({ msg: "login success", user, token });
          });
        }
      })

      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  }
};

const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  signup: (req, res) => {
    const { fullname, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    User.create({
      fullname,
      email,
      password: hash
    })
      .then(user => {
        const token = jwt.sign({ id: user._id, role: user.role }, "asik");
        res.status(201).json({
          msg: "success",
          user,
          token
        });
      })
      .catch(err => res.status(500).json({ msg: err }));
  },

  signin: (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
      .then(user => {
        let isTrue = bcrypt.compareSync(password, user.password);
        if (isTrue) {
          let token = jwt.sign({ id: user._id, role: user.role }, "asik");
          res.status(201).json({
            msg: "success to login",
            token
          });
        } else {
          res.status(400).json({
            mgs: "failed to login"
          });
        }
      })
      .catch(err => {
        res.status(400).json({
          msg: "check name and password"
        });
      });
  },
  signinFacebook: (req, res) => {
    const { accessToken, userID } = req.headers;
    console.log(`AC==>`,accessToken);
    
    let url_user_info = `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`;
    axios
      .get(url_user_info)
      .then(result => {
        User.findOne({ email: result.data.email }).then(data => {
          if (data) {
            const token = jwt.sign(
              {
                userID: data.userID,
                name: data.name
              },
              "monkey"
            );
            res.status(200).json({
              message: "Success login",
              token: token
            });
          } else {
            User.create({
              fullname: result.data.name,
              email: result.data.email
            }).then(() => {
              const token = jwt.sign(
                {
                  userID: userID,
                  name: result.data.name
                },
                "monkey"
              );
              res.status(200).json({
                message: "Login success",
                token: token
              });
            });
          }
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  }
};

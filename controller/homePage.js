const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const FB = require("fb");
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
  },



  fbLogin(req,res){
    FB.setAccessToken(req.headers.fbtoken)
    FB.api('/me',{
        fields:['name','email','picture']
    }).then(response=>{
        const {name,email,picture} = response
        User.findOne({email})
        .then(getUser=>{
       
            if(getUser){
                console.log('siip')
                let token = jwt.sign({
                    id:getUser._id,
                    name,
                    email,
                    role:'user'
                },'asik')
                
                res.status(200).json({
                    message:'success login with facebook',
                    token,
                    role,
                    image,
                    name
                })
            }
        })
        .catch(err=>{
            console.log(err)
            res.status(400).json({
                message: err.message
            })
        })
    }).catch(err=>{
        console.log(err)
        res.status(400).json({
            message: err.message
        })
    })
}







};

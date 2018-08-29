const express = require("express");
const router = express.Router();
// const darksky = require('../controllers/darkSky')

const { signup, signin, signinFacebook } = require("../controllers/user");


router
  .post("/signup", signup)
  .post("/signin", signin)
  .post("/signin/facebook", signinFacebook)
  // .get('/darksky',darksky.darkskyapi)


module.exports = router;

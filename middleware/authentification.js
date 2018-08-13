const authen = (req, res, next) => {
  let token = req.headers.token;
  if (token) {
    
    next();
  } else {
    res.status(401).json({ msg: "please login or register first" });
  }
};

module.exports = authen;

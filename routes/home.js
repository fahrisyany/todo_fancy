const express = require("express");
const router = express.Router();
const{ signUp, signIn,fbsignIn } = require("../controller/homePage");

// router.get('/',(req,res)=>{
//     res.json('nice')
// })

// router.get('/',homePage)
router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post('/fbSignIn',fbsignIn)

module.exports = router;

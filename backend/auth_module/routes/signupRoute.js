const express = require("express");
const router = express.Router();
const { userSignup, userSignin, getUser, sendOtp, verifyOtp, Adminlogin, Adminlogout} = require("../controller/authController");

router.post("/createuser", userSignup);
router.post("/signin", userSignin);
router.get("/getuser/:id", getUser);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/login', Adminlogin);
router.post('/logout', Adminlogout);

module.exports = router;

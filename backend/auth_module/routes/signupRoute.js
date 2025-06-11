const express = require("express");
const router = express.Router();
const { userSignup, userSignin, getUser, sendOtp, verifyOtp} = require("../controller/authController");

router.post("/createuser", userSignup);
router.post("/signin", userSignin);
router.get("/getuser/:id", getUser);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);

module.exports = router;

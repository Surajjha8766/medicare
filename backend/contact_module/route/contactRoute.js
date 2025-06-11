const express = require("express");
const router = express.Router();
const { postContact } = require("../controller/contactController");

// POST /api/contact - Handle contact form submissions
router.post("/postData", postContact);

module.exports = router;

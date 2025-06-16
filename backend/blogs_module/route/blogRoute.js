const express = require('express');
const router = express.Router();
const { postblogs, getblogsById, deleteById, getallblogs} = require("../controller/blogController");

router.post("/postblog", postblogs);
router.get("/getblog", getallblogs);
router.get("/getblogById/:userId", getblogsById);
router.delete("/deleteblog/:id", deleteById);

module.exports = router;
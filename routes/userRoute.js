const express = require('express');
const User = require("../models/userModel");
const router = express.Router();
const { createUser, loginUser } = require("../controllers/userController.js");
const { verifyJWT } = require('./verifyJWT');

router.post("/", createUser);
router.post("/login", loginUser);

module.exports = router;
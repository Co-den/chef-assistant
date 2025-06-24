const express = require("express");
const { getUserProfile } = require("../controllers/userController");
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", authenticateUser, getUserProfile); // Protected route

module.exports = router;

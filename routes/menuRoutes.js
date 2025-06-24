const express = require("express");
const menuController = require("../controllers/menuController");
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authenticateUser, menuController.getMenus);
router.post("/create", authenticateUser, menuController.createMenu);
router.delete("/:id", authenticateUser, menuController.deleteMenu);

module.exports = router;

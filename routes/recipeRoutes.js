const express = require("express");
const recipeController = require("../controllers/recipeController");
const authenticateUser = require("../middleware/authMiddleware");

// Recipe routes
const router = express.Router();

router.get("/", recipeController.getRecipe);
router.post("/save", authenticateUser, recipeController.saveRecipe);
router.get("/saved", authenticateUser, recipeController.getSavedRecipes);

module.exports = router;

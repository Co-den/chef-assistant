const axios = require("axios");
const Recipe = require("../models/Recipe"); // Assuming you have a Recipe model defined


exports.getRecipe = async (req, res) => {
  const { name } = req.query;

  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);

    if (!response.data.meals) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const recipe = response.data.meals[0];
    res.json({
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      ingredients: Object.keys(recipe)
        .filter(key => key.startsWith("strIngredient") && recipe[key])
        .map(key => recipe[key]),
      steps: recipe.strInstructions || "No instructions available",
      video: recipe.strYoutube ? recipe.strYoutube.replace("watch?v=", "embed/") : null
    });
  } catch (error) {
    console.error("Error fetching recipe:", error.message);
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
};


exports.saveRecipe = async (req, res) => {
  try {
    const { name, image, ingredients, steps, video } = req.body;
    // Get user ID from authentication
    const userId = req.userId; 

    const newRecipe = new Recipe({
      userId,
      name,
      image,
      ingredients,
      steps,
      video,
      createdAt: new Date()
    });

    await newRecipe.save();
    res.json({ message: "Recipe saved successfully!" });
  } catch (error) {
    console.error("Error saving recipe:", error);
    res.status(500).json({ error: "Failed to save recipe" });
  }
};

      
  
exports.getSavedRecipes = async (req, res) => {
  try {
    const userId = req.userId;
    const recipes = await Recipe.find({ userId });

    res.json(recipes);
  } catch (error) {
    console.error("Error fetching saved recipes:", error);
    res.status(500).json({ error: "Failed to fetch saved recipes" });
  }
};


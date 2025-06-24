const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  video: String,
  ingredients: [String],
  steps: String,
});


module.exports = mongoose.model("Recipe", RecipeSchema);

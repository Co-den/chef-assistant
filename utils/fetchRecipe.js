const axios = require("axios");

exports.fetchRecipeFromAPI = async (dishName) => {
  const apiKey = "YOUR_SPOONACULAR_API_KEY";
  const response = await axios.get(`https://api.spoonacular.com/recipes/search?query=${dishName}&apiKey=${apiKey}`);
  return response.data.results[0];
};

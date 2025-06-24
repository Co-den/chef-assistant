const dotenv = require("dotenv");
dotenv.config({
  path: "./config/.env",
});


const spoonacularConfig = {
  baseURL: "https://api.spoonacular.com/recipes/complexSearch",
  apiKey: process.env.API_KEY,
};

module.exports = spoonacularConfig;


require("dotenv").config();

const edamamConfig = {
  baseURL: "https://api.edamam.com/api/recipes/v2",
  appId: process.env.EDAMAM_APP_ID,
  apiKey: process.env.EDAMAM_API_KEY,
};

module.exports = edamamConfig;

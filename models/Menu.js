const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: String,
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Menu", MenuSchema);

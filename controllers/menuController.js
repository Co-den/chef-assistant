const Menu = require("../models/Menu");

exports.createMenu = async (req, res) => {
  try {
    const { title, recipeIds } = req.body;
    const userId = req.userId;

    const newMenu = new Menu({
      userId,
      title,
      recipes: recipeIds,
    });

    await newMenu.save();
    res.json({ message: "Menu created!", menu: newMenu });
  } catch (error) {
    res.status(500).json({ error: "Failed to create menu" });
  }
};
exports.getMenus = async (req, res) => {
  try {
    const userId = req.userId;
    const menus = await Menu.find({ userId }).populate("recipes");
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menus" });
  }
};
exports.deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const menu = await Menu.findOneAndDelete({ _id: id, userId });
    if (!menu) {
      return res.status(404).json({ error: "Menu not found" });
    }

    res.json({ message: "Menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete menu" });
  }
}
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./DB/db");
const recipeRoutes = require("./routes/recipeRoutes");
const menuRoutes = require("./routes/menuRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes"); // Import user routes
const app = express();
connectDB(); // Connect to DB

const allowedOrigins = [
  "http://localhost:5173",
  "https://chef-assistant-1.onrender.com"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

app.use("/recipes", recipeRoutes);
app.use("/menu", menuRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes); // Use user routes

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

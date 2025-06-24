const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized access" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
};

module.exports = authenticateUser;

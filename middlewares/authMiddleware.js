const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next) => {
  // Get the token from the authorization header
  const token = req.headers.authorization?.split(" ")[1];

  // Check if the authorization header starts with "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      
      const decoded = jwt.verify(token, process.env.JWT);

     
      req.user = await User.findById(decoded.id);

     
      next();
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  } else {
    // If the authorization header is missing or not starting with "Bearer"
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = protect;
// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const importedUser = require("../models/User");
const User = importedUser.default; // ✅ this fixes the problem

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  //   console.log(User);

  if (authHeader && authHeader.startsWith("Bearer ")) {
    try {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // req.user = decoded;
      req.user = await User.findById(decoded.id).select("-password");
      // console.log(req.user);
      next();
    } catch (err) {
      console.error("Auth error:", err);
      return res.status(401).json({ message: "Not authorized" });
    }
  } else {
    res.status(401).json({ message: "No token, authorization denied" });
  }
};

module.exports = authMiddleware;

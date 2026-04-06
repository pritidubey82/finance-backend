const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    // 1. Get token from header
    const token = req.header("Authorization");

    console.log("RAW TOKEN:", token); // 🔍 Debug

    // 2. Check if token exists
    if (!token) {
      return res.status(401).json({ msg: "No token" });
    }

    // 3. Remove "Bearer "
    const actualToken = token.split(" ")[1];

    console.log("ACTUAL TOKEN:", actualToken); // 🔍 Debug

    // 4. Verify token
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    console.log("JWT_SECRET:", process.env.JWT_SECRET); // Debug

    console.log("DECODED:", decoded); // 🔥 IMPORTANT DEBUG

    // 5. Attach user to request
    req.user = decoded;

    next();
  } catch (err) {
    console.error("JWT ERROR:", err.message); // 🔍 Debug error
    return res.status(401).json({ msg: "Invalid token" });
  }
};
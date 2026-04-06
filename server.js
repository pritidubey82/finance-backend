const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/records", require("./routes/recordRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("Finance API Running");
});

// PORT
const PORT = process.env.PORT || 5000;

// START SERVER AFTER DB CONNECTS
const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server Error:", error);
  }
};

startServer();
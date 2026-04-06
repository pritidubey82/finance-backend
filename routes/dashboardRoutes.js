const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const controller = require("../controllers/dashboardController");

// Viewer, Analyst, Admin can access dashboard
router.get("/", auth, role("viewer", "analyst", "admin"), controller.getSummary);

module.exports = router;

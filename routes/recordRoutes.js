const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const controller = require("../controllers/recordController");

// Admin only create/update/delete
router.post("/", auth, role("admin"), controller.createRecord);
router.put("/:id", auth, role("admin"), controller.updateRecord);
router.delete("/:id", auth, role("admin"), controller.deleteRecord);

// Analyst & Admin can view
router.get("/", auth, role("admin", "analyst"), controller.getRecords);

module.exports = router;
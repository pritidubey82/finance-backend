const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const controller = require("../controllers/userController");

router.get("/", auth, role("admin"), controller.getUsers);
router.get("/:id", auth, role("admin"), controller.getUserById);
router.put("/:id", auth, role("admin"), controller.updateUser);
router.delete("/:id", auth, role("admin"), controller.deleteUser);

module.exports = router;

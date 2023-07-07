const express = require("express");
const protect = require("../middleware/authMiddleware");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

// router.route("/").get(getTasks).post(createTask);
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

router.post("/", protect, createTask);
router.get("/", protect, getTasks);
router.get("/:id", protect, getTask);
router.delete("/:id", protect, deleteTask);
router.put("/:id", protect, updateTask);

module.exports = router;

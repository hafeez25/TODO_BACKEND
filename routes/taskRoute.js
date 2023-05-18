const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

// // Creat a Task
// router.post("/", creteTask);
// //Get/Read Tasks
// router.get("/",getTasks);
// //Get/Read Task
// router.get("/:id",getTask);
// //Delete Tasks
// router.delete("/:id",deleteTask);
// //update Tasks
// router.put("/:id",updateTask);

module.exports = router;
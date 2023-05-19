const router = require("express").Router();

const {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
  updateUser,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getuser", protect, getUser);
router.get("/loggedin", loginStatus);
router.post("/updateuser", protect, updateUser);

module.exports = router;

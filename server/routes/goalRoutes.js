const express = require("express");
const router = express.Router();

const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControler");
const { protect } = require("../middleware/authMiddleware");

// get all Goals
router.get("/", protect, getGoals);

// create Goal
router.post("/", protect, createGoal);

// update Goal
router.put("/:id", protect, updateGoal);

// delete Goal
router.delete("/:id", protect, deleteGoal);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControler");

// get all Goals
router.get("/", getGoals);

// create Goal
router.post("/", createGoal);

// update Goal
router.put("/:id", updateGoal);

// delete Goal
router.delete("/:id", deleteGoal);

module.exports = router;

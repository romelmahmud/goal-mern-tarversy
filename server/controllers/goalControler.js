const asyncHandler = require("express-async-handler");

// @desc     Get Goals
// @route    GET /api/goals
// @access   Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ massege: "Get Goals" });
});

// @desc     Create Goals
// @route    POST /api/goals
// @access   Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(201).json({ massege: "Create Goals" });
});

// @desc     Update Goals
// @route    PUT /api/goals/:id
// @access   Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ massege: `Update goal ${req.params.id}` });
});

// @desc     Delete Goals
// @route    DELETE /api/goals/:id
// @access   Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ massege: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};

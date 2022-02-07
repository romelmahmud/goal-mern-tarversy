// Dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const goalRoutes = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
const port = process.env.PORT || 5000;

// Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/goals", goalRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server is runinng...");
});

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
const userRoutes = require("./routes/user.route");
const jobRoutes = require("./routes/job.route");
const candidateRoutes = require("./routes/candidate.route");

// ROUTES USE
app.use("/user", userRoutes);
app.use("/jobs", candidateRoutes);
app.use("/", jobRoutes);

app.get("/", (req, res) => {
	res.send("Route is working! YaY!");
});

// NOT FOUND ROUTE
app.all("*", (req, res) => {
	res.send("NO route found.");
});

module.exports = app;

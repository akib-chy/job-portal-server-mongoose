const express = require("express");
const {
	getJobs,
	getJobDetailsById,
} = require("../controllers/candidate.controller");
const router = express.Router();

router.get("/", getJobs);
router.get("/:id", getJobDetailsById);

module.exports = router;

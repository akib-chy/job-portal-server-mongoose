const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");
const {
	createJob,
	getJobDetailsById,
	updateJobById,
} = require("../controllers/job.controller");
const router = express.Router();

router.post("/jobs", verifyToken, authorization("hr"), createJob);
router.get("/manager/jobs/:id", verifyToken, getJobDetailsById);
router.patch("/jobs/:id", verifyToken, updateJobById);

module.exports = router;

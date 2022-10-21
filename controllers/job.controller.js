const {
	createJobService,
	getJobDetailsByIdService,
	updateJobByIdService,
} = require("../services/job.services");

const createJob = async (req, res) => {
	try {
		const result = await createJobService(req.body);

		res.status(200).json({
			status: "success",
			message: "Data inserted successfully",
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Data is't inserted",
			error: error.message,
		});
	}
};

const getJobDetailsById = async (req, res) => {
	try {
		const { id } = req.params;

		const result = await getJobDetailsByIdService(id);

		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "can't get the job",
			error: error.message,
		});
	}
};

const updateJobById = async (req, res) => {
	try {
		const { id } = req.params;

		const result = await updateJobByIdService(id, req.body);

		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "can't update the job",
			error: error.message,
		});
	}
};

module.exports = { createJob, getJobDetailsById, updateJobById };

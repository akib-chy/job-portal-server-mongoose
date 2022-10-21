const Job = require("../models/Job");

const createJobService = async data => await Job.create(data);

const getJobDetailsByIdService = async id => await Job.findById({ _id: id });

const updateJobByIdService = async (id, data) => {
	const job = await Job.findById({ _id: id });
	const result = await job.set(data).save();
	return result;
};

module.exports = {
	createJobService,
	getJobDetailsByIdService,
	updateJobByIdService,
};

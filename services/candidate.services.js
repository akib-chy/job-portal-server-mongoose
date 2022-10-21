const Job = require("../models/Job");

const getJobsService = async (filters, queries) => {
	const { skip, limit = 3, fields, sortBy } = queries;

	const jobs = await Job.find(filters)
		.skip(skip)
		.limit(limit)
		.select(fields)
		.select("-role -description -email -createdAt -updatedAt")
		.sort(sortBy);

	const totalJobs = await Job.countDocuments(filters);
	const pageCount = Math.ceil(totalJobs / limit);

	return { totalJobs, pageCount, jobs };
};

const getJobDetailsByIdService = async id => await Job.findById({ _id: id });

module.exports = { getJobsService, getJobDetailsByIdService };

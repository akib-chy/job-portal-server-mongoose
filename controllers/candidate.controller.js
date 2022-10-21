const {
	getJobsService,
	getJobDetailsByIdService,
} = require("../services/candidate.services");

const getJobs = async (req, res) => {
	try {
		// EXCLUDE FIELDS FROM QUERY STRING
		let filters = { ...req.query };

		// sort, page, limit -> exclude
		const excludeFields = ["sort", "page", "limit"];
		excludeFields.forEach(field => delete filters[field]);

		// Filtering with Operators
		// http://localhost:5000/jobs?salary[lt]=50
		let filtersString = JSON.stringify(filters);
		filtersString = filtersString.replace(
			/\b(gt|gte|lt|lte)\b/g,
			match => `$${match}`
		);

		filters = JSON.parse(filtersString);

		const queries = {};

		if (req.query.sort) {
			const sortBy = req.query.sort.split(",").join(" ");
			queries.sortBy = sortBy;
		}

		if (req.query.fields) {
			const fields = req.query.fields.split(",").join(" ");
			queries.fields = fields;
		}

		if (req.query.page || req.query.limit) {
			const { page = 1, limit = 3 } = req.query;

			const skip = (page - 1) * Number(limit);
			queries.skip = skip;
			queries.limit = Number(limit);
		}

		const jobs = await getJobsService(filters, queries);

		res.status(200).json({
			status: "sussess",
			data: jobs,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Can't get job",
			error: error.message,
		});
	}
};

const getJobDetailsById = async (req, res) => {
	try {
		const { id } = req.params;

		const job = await getJobDetailsByIdService(id);

		res.status(200).json({
			status: "sussess",
			data: job,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Can't get the job",
			error: error.message,
		});
	}
};

module.exports = { getJobs, getJobDetailsById };

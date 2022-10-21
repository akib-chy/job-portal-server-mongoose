const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const dbConnect = require("./utils/dbConnect");

const app = require("./app");

// DATABASE CONNECTION
dbConnect();

// SERVER RUNING PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});

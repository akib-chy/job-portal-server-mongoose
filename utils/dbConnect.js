const mongoose = require("mongoose");

// DATABASE CONNECTION
const dbConnect = () => {
	mongoose
		.connect(process.env.DATABASE, {
			useNewUrlParser: true,
		})
		.then(() => {
			console.log("Database connection is successfully");
		});
};

module.exports = dbConnect;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://jobPortal:<password>@cluster0.bk38tih.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

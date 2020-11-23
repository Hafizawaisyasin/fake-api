const winston = require("winston");
const config = require("config");
const mongoose = require("mongoose");
module.exports = function () {
	mongoose.connect(config.get("db")).then(() => winston.info("Connected to MongoDB..."));
	// .catch((err) => console.error("Could not connect to MongoDB..."));
};

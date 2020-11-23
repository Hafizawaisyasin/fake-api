require("express-async-errors");
const winston = require("winston");
require("winston-mongodb");
module.exports = function () {
	//event emmiter
	//this used only with synchronus not with promise
	//ye islye comment kiya q k hum ab handleexception p relay kr skty hein
	// process.on("uncaughtException", (exception) => {
	// 	//console.log("we got an uncaught erroe");
	// 	winston.error(exception.message, exception);
	// 	// 0 means success or anything means fails
	// 	process.exit(1);
	// });

	winston.handleExceptions(
		new winston.transports.Console({ colorize: true, prettyprint: true }),
		new winston.transports.File({ filename: "uncaughtExceptions.log" })
	);
	//how to deal handle promise rjection
	process.on("unhandledRejection", (exception) => {
		//console.log("we got an unhandledRejection error");
		// winston.error(exception.message, exception);
		// process.exit(1);
		throw exception;
	});
	// process.env.config.get("jwtPrivateKey") = "mysecurekey"; //use PORT env variable

	// const p = Promise.reject(new Error("something garbar in promises"));
	// p.then(() => {
	// 	console.log("done");
	// });
	// if (!config.get("jwtPrivateKey")) {
	// 	console.log("Fatal Error: jwtPrivateKey key is not defined");
	// 	process.exit(1);
	// }

	winston.add(winston.transports.File, { filename: "logfile.log" });
	//we use same db to logging erroe in future we use different
	winston.add(winston.transports.MongoDB, {
		db: "mongodb://localhost/vidly",
		level: "error",
	});
	//handle unhandle errors in nide level
	//throw new Error("awais ki marzi");
};

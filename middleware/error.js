const winston = require("winston");
module.exports = function (err, req, res, next) {
	//log the exception
	winston.error(err.message, err);
	//error
	//warning
	//info
	//verbose
	//silly
	res.status(500).send("Something failed");
};

module.exports = function asyncMiddlewere(handler) {
	return async (req, res, next) => {
		try {
			await handler();
		} catch (ex) {}
	};
};

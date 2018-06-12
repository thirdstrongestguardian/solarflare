module.exports = function (selector, context) {
	return (context || document).querySelector(selector);
};
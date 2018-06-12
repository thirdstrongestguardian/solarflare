module.exports = function (selector, context) {
	return (context || document).querySelectorAll(selector);
};
module.exports = function (el) {
	return el.textContent || el.innerText;
};
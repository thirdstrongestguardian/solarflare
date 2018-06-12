module.exports = function (el, html) {
	if (html) {
		el.innerHTML = html;
	}

	return el.innerHTML;
};
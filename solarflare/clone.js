module.exports = function (el, deep) {
	if (deep === undefined) deep = true;
	return el.cloneNode(deep);
};
module.exports = function (elems, handler) {
	for (var i = 0; i < elems.length; i += 1) {
		handler(elems[i], i);
	}
};
module.exports = function (needle, haystack) {
	var length = haystack.length;
	for (var i = 0; i < length; i += 1) {
		if (haystack[i] == needle) return i;
	}
	return -1;
};
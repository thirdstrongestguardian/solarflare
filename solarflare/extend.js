module.exports = function (obj, src) {
	for (var key in src) {
		if (src.hasOwnProperty(key)) obj[key] = src[key];
	}

	return obj;
};
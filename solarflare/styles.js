module.exports = {
	get: function (el) {
		return el.style;
	},
	set: function (el, styles) {
		for (var property in styles)
			el.style[property] = styles[property];
	},
};
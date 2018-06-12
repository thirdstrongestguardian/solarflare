module.exports = {
	get: function (el, name) {
		return el.style[name];
	},

	set: function (el, name, value) {
		el.style[name] = value;
	},
};

module.exports = {
	get: function (el, name) {
		return el.getAttribute(name);
	},
	remove: function (el, name) {
		return el.removeAttribute(name);
	},
	set: function (el, name, value) {
		return el.setAttribute(name, value);
	},
};
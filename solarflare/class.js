module.exports = {
	add: function (el, name) {
		if (el.classList) el.classList.add(name);
		else if (!hasClass(el, name)) el.className += ' ' + name;
	},
	has: function (el, name) {
		return el.classList ? el.classList.contains(name) : new RegExp('\\b' + name + '\\b').test(el.className);
	},
	remove: function (el, name) {
		if (el.classList) el.classList.remove(name);
		else el.className = el.className.replace(new RegExp('\\b' + name + '\\b'), '');
	},
};
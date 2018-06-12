module.exports = function (el) {
	var parent = el.parentNode;
	while (el.firstChild) parent.insertBefore(el.firstChild, el);
	parent.removeChild(el);
};
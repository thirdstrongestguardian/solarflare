module.exports = function (el, old) {
	old.parentNode.replaceChild(el, old);
};
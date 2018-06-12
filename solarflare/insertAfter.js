module.exports = function (el, ref) {
	ref.parentNode.insertBefore(el, ref.nextSibling);
};
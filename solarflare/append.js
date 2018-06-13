module.exports = function (el, parent) {
	(parent || document.body).appendChild(el);
};
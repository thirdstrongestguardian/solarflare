module.exports = function (el, type, handler) {
	if (el.attachEvent) el.attachEvent('on' + type, handler);
	else el.addEventListener(type, handler);
};
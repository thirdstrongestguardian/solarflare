module.exports = function (el, type, handler) {
	if (el.detachEvent) el.detachEvent('on' + type, handler);
	else el.removeEventListener(type, handler);
};
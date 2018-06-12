module.exports = function (el, type) {
	if ('createEvent' in document) {
		var e = document.createEvent('HTMLEvents');
		e.initEvent(type, false, true);
		el.dispatchEvent(e);
	} else {
		var e = document.createEventObject();
		e.eventType = type;
		el.fireEvent('on' + e.eventType, e);
	}
};
module.exports = function (selector, event, callback, context) {
	$.on(context || document, event, function (e) {
		var qs = (context || document).querySelectorAll(selector);
		if (qs) {
			var el = e.target || e.srcElement, index = -1;
			while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) el = el.parentElement;
			if (index > -1) callback.call(el, e);
		}
	});
};
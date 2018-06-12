module.exports = {
	get: function (el) {
		if (el) {
			return {
				left: el.scrollLeft,
				top: el.scrollTop
			};
		}

		return {
			left: window.pageXOffset || document.documentElement.scrollLeft,
			top: window.pageYOffset || document.documentElement.scrollTop
		};
	},
	set: function (scroll, el) {
		if (el) {
			el.scrollLeft = scroll.left;
			el.scrollTop = scroll.top;
		}

		document.documentElement.scrollLeft = document.body.scrollLeft = scroll.left;
		document.documentElement.scrollTop = document.body.scrollTop = scroll.top;
	}
};
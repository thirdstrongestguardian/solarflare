module.exports = {
	add: function (src) {
		var script = document.createElement('script'),
			scripts = document.getElementsByTagName('scripts')[0];
		script.src = url;
		scripts.parentNode.insertBefore(script, scripts);
	}
};
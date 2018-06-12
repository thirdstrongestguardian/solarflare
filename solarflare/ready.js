module.exports = function (run) {
	if (document.readyState != 'loading') run();
	else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
	else document.attachEvent('onreadystatechange', function () {
		if (document.readyState == 'complete') run();
	});
};
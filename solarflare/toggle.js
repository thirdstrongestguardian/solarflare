module.exports = function (el, value) {
	var display = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display;
	if (display == 'none') el.style.display = value;
	else el.style.display = 'none';
};
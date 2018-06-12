module.exports = function (el, wrapper) {
	if (typeof wrapper === 'string') wrapper = document.createElement(wrapper);
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
};
function mount(element, target) {
	if (!target) {
		target = this;
	}

	if (target && target.nodeType) {
		this.appendChild(element);
	}
};

document.body.mount = mount;

module.exports = mount;
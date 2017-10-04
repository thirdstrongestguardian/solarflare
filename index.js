var solarflare = function (rays) {
	// properties
	var $element = document.createElement('div');
	var $index = arguments && arguments.length > 1 ? parseInt(arguments[1], 10) : 0;
	var $rays = rays;

	// methods
	var handleHTML;
	var handleObject;
	var handleTagName;

	handleHTML = function () {
		if ($index === 0) {
			$element = handleTagName($rays);
		} else {
			$element.innerHTML += $rays;
		}
	};
	
	handleObject = function ($rays) {
		if ($rays.view && typeof $rays.view === 'function') {
			$element.appendChild(solarflare($rays.view()));
		} else if (Array.isArray($rays)) {
			$rays.forEach(solarflare);
		} else {
			Object.keys($rays).filter(function (key) {
				$element.setAttribute(key, e[key]);
			});
		}
	};
	
	handleTagName = function ($rays) {
		if ($rays.length > 0) {
			return document.createElement($rays);
		}
	
		return document.createElement('div');
	}
	
	if (typeof $rays === 'number' || typeof $rays === 'string') {
		handleHTML();
	} else if ($rays.nodeType) {
		$element.appendChild();
	} else if (typeof $rays === 'object') {
		handleObject();
	}

	return $element;
};

module.exports = solarflare;


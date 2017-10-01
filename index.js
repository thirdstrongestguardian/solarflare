var solarflare = function (rays) {
	var $element = document.createElement('div');

	if (Array.isArray(rays)) {
		rays.forEach(function (e, i) {
			if (i === 0 && typeof e === 'string') {
				if (e.length > 0) {
					$element = document.createElement(e);
				}
				
				return;
			} 

			if (typeof e === 'string') {
				$element.innerHTML += e;
			}

			if (e.nodeType) {
				$element.appendChild(e);
			}

			if (typeof e === 'object') {
				if (Array.isArray(e)) {
					$element.appendChild(solarflare(e));
				} else {
					Object.keys(e).filter(function (key) {
						$element.setAttribute(key, e[key]);
					});
				}
			}
		});
	}

	return $element;
};

module.exports = solarflare;


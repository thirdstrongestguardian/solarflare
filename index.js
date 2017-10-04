var solarflare = function (rays) {
	var $element = document.createElement('div');
	var v;

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
				if (e.view  && typeof e.view === 'function') {
					v = e.view();

					if (Array.isArray(v)) {
						$element.appendChild(solarflare(v));
					} else {
						$element.appendChild(v);
					}
				} else if (Array.isArray(e)) {
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


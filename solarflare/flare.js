var flare = function (rays) {
	var $element = document.createElement('div');
	
	if (Array.isArray(rays)) {
		rays.forEach(function (e, i) {
			if (i === 0 && typeof e === 'string') {
				if (e.length > 0) {
					$element = document.createElement(e);
				}
			} 
			else if (e.nodeType) {
				$element.appendChild(e);
			}
			else if (typeof e === 'number' || typeof e === 'string') {
				$element.innerHTML += e;
			}
			else if (typeof e === 'object') {
				 if (Array.isArray(e)) {
					$element.appendChild(flare(e));
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

module.exports = flare;


function http(url, options) {
	var self = this;

	var then = function (callback) { 
		if (typeof callback === 'function') { 
			callback(); 
		} 
		
		return self; 
	};

	var error = function (callback) { 
		if (typeof callback === 'function') { 
			callback(); 
		}
		
		return self; 
	};

	var xhr = XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			then();
		} else {
			error();
		}
	};
	xhr.open(options.method || 'GET', url, true);
	xhr.send();
};

module.exports = http;
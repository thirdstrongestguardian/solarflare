var http = {
	get: function (url, success) {
		return this.ajax(url, null, 'GET', success);
	},
	getJson: function (url, success) {
		return this.getAjax(url, function (data) {
			var json = JSON.parse(data);
			success(json);
		});
	},
	post: function (url, data, success) {
		return this.ajax(url, data, 'POST', success);
	},
	postJson: function (url, data, success) {
		return this.postAjax(url, data, function (data) {
			var json = JSON.parse(data);
			success(json);
		});
	},
	send: function (url, data, method, success) {
		var params;
		if (data) {
			params = typeof data == 'string' ? data : Object.keys(data).map(
				function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]); }
			).join('&');
		}

		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		xhr.open(method, url);
		xhr.onreadystatechange = function () {
			if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
		};
		xhr.setRequestHeader('X-Request-Width', 'XMLHttpRequest');

		if (data) {
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send(params);
		} else {
			xhr.send();
		}

		return xhr;
	}
};

module.exports = http;
var http = require('./http');

var templates = {
	_templates: [],
	
	add: function (key, html) {
		templates._templates[key] = html;
	},
	element: function (key, model) {
		var temp = document.createElement('div');
		temp.innerHTML = templates.get(key, model);
		return temp.firstChild;
	},
	get: function (key, model) {
		return templates.parse(templates._templates[key], model);
	},
	load: function (key, url) {
		http.get(url, function (data) {
			templates._templates[key] = data;
		});
	},
	parse: function (html, model) {
		html = html.trim();

		if (model) {
			for (var key in model) {
				console.log(key + ': ' + model[key]);
				while (html.indexOf('{{' + key + '}}') >= 0) {
					html = html.replace('{{' + key + '}}', model[key]);
				}
			}
		}

		return html;
	},
	parseElement: function (html, model) {
		var temp = document.createElement('div');
		temp.innerHTML = templates.parse(html, model);
		return temp.firstChild;
	}
};

module.exports = templates;
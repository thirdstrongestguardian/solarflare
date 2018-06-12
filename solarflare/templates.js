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
		return templates.parse($.templates._templates[key], model);
	},
	load: function (key, url) {
		http.get(url, function (data) {
			templates._templates[key] = data;
		});
	},

};

module.exports = templates;
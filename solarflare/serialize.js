module.exports = {
	array: function (form) {
		var field, l, s = [];
		if (typeof form == 'object' && form.nodeName == 'FORM') {
			var len = form.elements.length;
			for (var i = 0; i < len; i += 1) {
				field = form.elements[i];
				if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
					if (field.type == 'select-multiple') {
						l = form.elements[i].options.length;
						for (var j = 0; j < l; j += 1) {
							if (field.options[j].selected)
								s[s.length] = { name: field.name, value: field.options[j].value };
						}
					} else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
						s[s.length] = { name: field.name, value: field.value };
					}
				}
			}
		}
		return s;
	}, 
	form: function (form) {
		var field, l, s = [];
		if (typeof form == 'object' && form.nodeName == "FORM") {
			var len = form.elements.length;
			for (var i = 0; i < len; i += 1) {
				field = form.elements[i];
				if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
					if (field.type == 'select-multiple') {
						l = form.elements[i].options.length;
						for (var j = 0; j < l; j += 1) {
							if (field.options[j].selected)
								s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
						}
					} else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
						s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
					}
				}
			}
		}
		return s.join('&').replace(/%20/g, '+');
	}
};
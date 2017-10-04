var solarflare = require('../..');

var element = solarflare(['div', ['h1', 'Hello World']]);

document.body.appendChild(element);
var solarflare = require('solarflare');

var layout = ['body',
	['h1', 'Hello World'],
	['div',
		['h2', 'Smaller World']
	]
]

var body = solarflare(layout);

document.body = body;
var solarflare = require('../..');

var layout = ['body',
	['h1', 'Hello World'],
	['',
		['h2', 'Smaller World']
	]
]

var body = solarflare(layout);

document.body = body;
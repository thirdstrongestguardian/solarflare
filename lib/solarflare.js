const el = require('./el');
const http = require('./http');
const mount = require('./mount');

var solarflare = el;
solarflare.http = http;
solarflare.mount = mount;

module.exports = solarflare


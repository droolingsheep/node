var http = require('http');
var url = require('url');
var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'application/json'});
	var parsed = url.parse(req.url, true);
	var endpoint = parsed.pathname;
	var dateStr = parsed.query.iso;
	var date = new Date(dateStr);
	if (endpoint === '/api/parsetime') {
		res.end(JSON.stringify({hour:date.getHours(), minute:date.getMinutes(), second:date.getSeconds()}));
	} else if (endpoint === '/api/unixtime') {
		res.end(JSON.stringify({unixtime: date.getTime()}));
	}
});
server.listen(process.argv[2]);

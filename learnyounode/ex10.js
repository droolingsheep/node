var net = require('net');
var time = require('strftime');
var server = net.createServer(function(socket) {
	var date = new Date();
	var dateStr = time('%Y-%m-%d %H:%M\n');
	socket.end(dateStr);
});
server.listen(process.argv[2]);

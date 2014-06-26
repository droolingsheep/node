var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function(stream) {
	stream.pipe(bl(function(err, data) {
		var str = data.toString();
		console.log(str.length);
		console.log(str);
	}));
});

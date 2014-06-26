var fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', function callback(err, data) {
	var count = data.split('\n').length;
	console.log(count-1);
});

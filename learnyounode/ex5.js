var fs = require('fs');
var path = require('path');
var target = '.' + process.argv[3];
fs.readdir(process.argv[2], function callback(err, list) {
	//filter list so that only files ending with process.argv[3] are printed
	for (file in list) {
		var ext = path.extname(list[file]);
		if (ext == target) {
			console.log(list[file]);
		}
	}
});

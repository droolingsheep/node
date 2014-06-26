var fs = require('fs');
var path = require('path');
function readAndFilter(dir, extin, callback) {

	var target = '.' + extin;
	var arr = [];
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err);
		}
		//filter list so that only files ending with process.argv[3] are printed
		for (file in list) {
			var ext = path.extname(list[file]);
			if (ext == target) {
				arr.push(list[file]);
			}
		}
		return callback(null, arr);
	});
}
module.exports = readAndFilter;


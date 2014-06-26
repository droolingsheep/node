var http = require('http');
var bl = require('bl');
var count = 3;
var str1, str2, str3;
http.get(process.argv[2], function(stream) {
	stream.pipe(bl(function(err, data) {
		str1 = data.toString();
		if (--count === 0) {
			console.log(str1);
			console.log(str2);
			console.log(str3);
		}
	}));
});
http.get(process.argv[3], function(stream) {
	stream.pipe(bl(function(err, data) {
		str2 = data.toString();
		if (--count === 0) {
			console.log(str1);
			console.log(str2);
			console.log(str3);
		}
	}));
});
http.get(process.argv[4], function(stream) {
	stream.pipe(bl(function(err, data) {
		str3 = data.toString();
		if (--count === 0) {
			console.log(str1);
			console.log(str2);
			console.log(str3);
		}
	}));
});

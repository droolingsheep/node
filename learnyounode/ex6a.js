var ex6b = require('./ex6b.js');
ex6b(process.argv[2], process.argv[3], function(err, data) {
	if (err === null) {
		for (i in data) {
			console.log(data[i]);
		}
	} else {
		console.log('There was an error');
	}
});

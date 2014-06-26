var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var count = str.split('\n').length;
count--;
console.log(count);

//fs.appendFile appends specified content to a file
//if file does not exist, it will be created

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello, content!', function (err) {
	if (err) throw err;
	console.log('Saved');
});
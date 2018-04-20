//fs.open() creates a new emprty file

var fs = require('fs');

// w in second argument is for writing, so file is opened for writing
fs.open('mynewfile2.txt', 'w', function (err, file) {
	if (err) throw err;
	console.log('Saved');
});
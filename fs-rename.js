//fs.rename() renames specified file

var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedFile.txt', function(err) {
	if (err) throw err;
	console.log('File renamed');
});
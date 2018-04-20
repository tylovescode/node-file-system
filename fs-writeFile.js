//fs.writeFile() replaces specified file and content if it exists
//if it doesn't exist, a new file and specified content
//will be created

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content', function(err) {
	if (err) throw err;
	console.log('Saved');
});
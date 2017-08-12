var PythonShell = require('python-shell');
var file = require('./fileHandling.js');
var fs = require("fs");


file.writeToFile("Hi! okay dear");

PythonShell.run('run.py', function (err) {
  if (err) throw err;
  console.log('finished');
});

var data;
function re() {
	data = file.readFromFile();
	console.log(data);
} 

setTimeout(re, 3000);

// end the input stream and allow the process to exit

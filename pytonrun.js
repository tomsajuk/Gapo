var PythonShell = require('python-shell');
var pyshell = new PythonShell('run.py');
var fs = require("fs")

var data = fs.readFileSync('input.txt');

pyshell.send(data.toString());

pyshell.on('message', function (mes) {
	fs.writeFile('output.txt', mes,  function(err) {
	   if (err) {
	      return console.error(err);
	   }
	});
});


// end the input stream and allow the process to exit
pyshell.end(function (err) {
  if (err) throw err;
  console.log('finished');
});
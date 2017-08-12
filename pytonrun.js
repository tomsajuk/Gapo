var PythonShell = require('python-shell');
var pyshell = new PythonShell('run.py');

var msg = 'heelo';
pyshell.send(msg);

pyshell.on('message', function (mes) {
	console.log(mes);
	exports.lol = mes;
});


// end the input stream and allow the process to exit
pyshell.end(function (err) {
  if (err) throw err;
  console.log('finished');
});
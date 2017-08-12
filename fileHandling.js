var fs = require("fs");

module.exports.writeToFile = function (message) {
	fs.writeFileSync('input.txt', message);
	console.log("write");
};

module.exports.readFromFile = function () {
	var data = fs.readFileSync('./output.txt');
	console.log("read");
	fs.truncate('./output.txt', 0, function(){console.log('done2')});
	fs.truncate('./input.txt', 0, function(){console.log('done1')});
	return data.toString();
};
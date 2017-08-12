'use strict';

const express = require('express');
const bodyParser = require('body-parser');

var PythonShell = require('python-shell');
var file = require('./fileHandling.js');
var fs = require("fs");

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

// function that gets the text from api.ai. 
restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    
    file.writeToFile(speech);
	var reply = req.body.result.fulfillment.displayText;
	file.perm(speech + ' ' + reply);
	PythonShell.run('run.py', function (err) {
	  if (err) throw err;
	  var data = file.readFromFile();
	
		return res.json({
        speech: data,
        displayText: data,
        source: 'webhook-heroku'
    });
	  console.log('finished');
	});

    
});


restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});

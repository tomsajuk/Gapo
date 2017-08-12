'use strict';

const express = require('express');
const bodyParser = require('body-parser');

var PythonShell = require('python-shell'); //new
var pyshell = new PythonShell('./run.py'); //new

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

// function that gets the text from api.ai. 
restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    //new
    pyshell.send(speech);
    pyshell.on('message', function (mes) {
		console.log(mes);
		return res.json({
	        speech: mes,
	        displayText: speech,
	        source: 'webhook-heroku'
	    });
	});

    //tilll here
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});

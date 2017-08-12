'use strict';

const express = require('express');
const bodyParser = require('body-parser');

var run = require('./pytonrun.js');
const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

// function that gets the text from api.ai. 
restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    
    fs.writeFile('input.txt', speech,  function(err) {
	   if (err) {
	      return console.error(err);
	   }
	});

	var data = fs.readFileSync('output.txt');

    return res.json({
        speech: data,
        displayText: data,
        source: 'webhook-heroku'
    });
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});

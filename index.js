'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var fs = require("fs");

var run = require('./pytonrun.js');
const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

// function that gets the text from api.ai. 
restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."

    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-heroku'
    });
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});

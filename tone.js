var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3(
{
  url: "https://gateway.watsonplatform.net/tone-analyzer/api",
  username: "1e4118f7-03cb-4e7c-8548-3e2321e962be",
  password: "YAkeZJo2wWad",
  version_date: "2016-05-19"
  
}
);

var params = require('./tone-chat.json');

tone_analyzer.tone_chat(params, function(error, response) {
  if (error)
    console.log('error:', error);
  else
    console.log(JSON.stringify(response, null, 2));
  }
);
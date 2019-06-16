const express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'));

var aylien = require("aylien_textapi");

// set aylien API credentias
var textapi = new aylien({
  application_id: "652cef67",
  application_key: "b1d451f9bd9418ebd2f9bd892057ee0a"
});

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
})

app.get('/test', function (req, res) {
    res.send(json);
})

app.post('/api', function(req, res) {
    console.log("got request to api route!");
    console.log(req.body.text);
    textapi.sentiment({'text': req.body.text}, function(err, result, remaining) {
        console.log(result, remaining)
        res.send(result)
    });
})

app.post('/article', function(req, res) {
    console.log(req);
    console.log("making request for article analysis: ", req.body);
    // resource: https://docs.aylien.com/textapi/endpoints/#entity-level-sentiment-analysis
    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        console.log("got alien result! ", response)
        res.send(response)
    });
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

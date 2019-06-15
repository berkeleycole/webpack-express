const express = require('express')

const app = express()
app.use(express.static('src/public'));

var aylien = require("aylien_textapi");

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

// set aylien API credentias
var textapi = new aylien({
  application_id: "652cef67",
  application_key: "b1d451f9bd9418ebd2f9bd892057ee0a"
});


app.get('/', function (req, res) {
    res.sendFile('/views/index.html', { root: __dirname });
})

app.get('/test', function (req, res) {
    res.send(json);
})

app.get('/api', function(req, res) {
    textapi.sentiment({'text': 'John is a very good football player'}, function(err, result, remaining) {
        console.log(remaining)
        res.send(remaining)
    });
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

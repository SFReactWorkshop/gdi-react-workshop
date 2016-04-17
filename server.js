var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/tweets.json', function(req, res) {
  fs.readFile('tweets.json', function(err, data) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/tweets.json', function(req, res) {
  fs.readFile('tweets.json', function(err, data) {
    var tweets = JSON.parse(data);
    tweets.unshift(req.body);
    fs.writeFile('tweets.json', JSON.stringify(tweets, null, 4), function(err) {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(tweets);
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

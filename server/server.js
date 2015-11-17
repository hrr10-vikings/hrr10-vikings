var express = require('express');
var alchemy = require('./alchemy');
var app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(express.static(__dirname + '/public'));

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Pillager app now listening on port ' + app.get('port'));
});

//app.listen(app.get('port'));

//ALCHEMY SAMPLE USAGE:
//alchemy.getKeywords('http://www.google.com', 10, function(results) {
//    console.log(results);
//});

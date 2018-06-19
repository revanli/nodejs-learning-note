
const http = require('http');
const url = require('url');
const queryString = require('querystring');

var server = http.createServer(function (req, res) {
  var urlObj = url.parse(req.url);
  var query = urlObj.query;
  var queryObj = queryString.parse(query);

  console.log('4、http请求头部: ' + JSON.stringify(queryObj));

  res.end('ok');
})

server.listen(3000);

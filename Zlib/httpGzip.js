var http = require('http')
var zlib = require('zlib')
var fs = require('fs')
var filePath = './assets/fileForCompress.txt';

var server = http.createServer(function (req, res) {
  var acceptEncoding = req.headers['accept-encoding'];
  var gzip;

  if (acceptEncoding.indexOf('gzip') !== -1) {
    gzip = zlib.createGzip();
    res.writeHead(200, {
      'Content-Encoding': 'gzip'
    });
    fs.createReadStream(filePath).pipe(gzip).pipe(res)
  } else {
    fs.createReadStream(filePath).pipe(res)
  }
})

server.listen('3000', function () {
  console.log('node has listen on 3000')
})
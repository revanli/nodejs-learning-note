var http = require('http')

// http server例子
var server = http.createServer(function (serverReq, serverRes) {
  var url = serverReq.url;
  console.log('result>>>', serverReq);
  // serverRes.end('您访问的地址是：' + url)
})

server.listen(3000);

// http client例子
var client = http.get('http://127.0.0.1:3000', function (clientRes) {
  clientRes.pipe(process.stdout);
})

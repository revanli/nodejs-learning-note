#### 概览
gzip是性能优化的大杀器，浏览器向服务器发起资源请求，比如下载一个js文件，服务器先对资源进行压缩，再返回给浏览器，以此节省流量，加快访问速度。
如何判断能否用gzip呢？浏览器通过HTTP请求头里**Accept-Encodign**,告诉服务器，可以使用"gzip或者defalte算法压缩资源"
> Accept-Encoding: gzip, deflate
在node中，是Zlib模块进行资源压缩

#### 简单压缩例子
```javascript
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var inp = fs.createReadStream('./assets/fileForCompress.txt');
var out = fs.createWriteStream('./assets/fileHasCompressed.txt.gz');
inp.pipe(gzip).pipe(out)
```
#### 服务端gzip压缩
判断**accept-encoding**首部是gzip, 是就返回gzip压缩的文件，否就返回未压缩的文件
```javascript
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
```
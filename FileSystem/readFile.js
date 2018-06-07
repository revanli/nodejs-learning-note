var fs = require('fs')
var data;


// read file sync
try {
  data = fs.readFileSync('./assets/file.txt', 'utf8')
  console.log('文件内容1>>>' + data)
} catch (e) {
  console.err('读取文件出错' + e.message)
}


// read file async
fs.readFile('./assets/file.txt', 'utf8', function (err, data) {
  if (err) {
    return console.err('读取文件出错' + err.message)
  }
  console.log('文件内容2>>>' + data)
})

// file stream
var readStream = fs.createReadStream('./assets/file.txt', 'utf8');

readStream
  .on('data', function (chunk) {
    console.log('readStream 读取的数据>>>', chunk)
  })
  .on('error', function (err) {
    console.log('出错>>>', err.message)
  })
  .on('end', function () {
    console.log('没有数据>>>')
  })
  .on('close', function () {
    console.log('已经关闭>>>')
  })
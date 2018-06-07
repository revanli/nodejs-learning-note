#### 概览

### 文件读取
#### 同步读取
```javascript
var fs = require('fs')
var data;

// read file sync
try {
  data = fs.readFileSync('./assets/file.txt', 'utf8')
  console.log('文件内容1>>>' + data)
} catch (e) {
  console.err('读取文件出错' + e.message)
}
```

#### 异步读取
```javascript
var fs = require('fs')
var data;

// read file async
fs.readFile('./assets/file.txt', 'utf8', function (err, data) {
  if (err) {
    return console.err('读取文件出错' + err.message)
  }
  console.log('文件内容2>>>' + data)
})
```

#### 文件流读取
```javascript
var fs = require('fs')
var data;

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
```


### 文件写入
#### 同步写入
```javascript
var fs = require('fs')

// 同步写入
try {
  fs.writeFileSync('./assets/fileForWriteSync.txt', txt, 'utf8')
  console.log('文件写入成功')
} catch (err) {
  throw err
}
```

#### 异步写入
```javascript
var fs = require('fs')

// 异步写入，不存在创建，存在在覆盖文件内容
var txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatem natus, minus. Tempore voluptate nesciunt unde libero alias delectus quae nihil dolorum. Veritatis accusamus eum, quos odit voluptate dolores est.'
fs.writeFile('./assets/fileForWrite.txt', txt, 'utf8', function (err) {
  if (err) throw err
  console.log('文件写入成功')
})
```

#### 文件流写入
```javascript
var fs = require('fs')

var writeStream = fs.createWriteStream('./assets/fileForWrite.txt', 'utf8')
writeStream
  .on('close', function () {
    console.log('已经关闭')
  })
writeStream.write('hello')
writeStream.write('world')
writeStream.end('')
```


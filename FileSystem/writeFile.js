var fs = require('fs')

// 异步写入，不存在创建，存在在覆盖文件内容
var txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatem natus, minus. Tempore voluptate nesciunt unde libero alias delectus quae nihil dolorum. Veritatis accusamus eum, quos odit voluptate dolores est.'
fs.writeFile('./assets/fileForWrite.txt', txt, 'utf8', function (err) {
  if (err) throw err
  console.log('文件写入成功')
})


// 同步写入
try {
  fs.writeFileSync('./assets/fileForWriteSync.txt', txt, 'utf8')
  console.log('文件写入成功')
} catch (err) {
  throw err
}

// 通过文件流写入
var writeStream = fs.createWriteStream('./assets/fileForWrite.txt', 'utf8')
writeStream
  .on('close', function () {
    console.log('已经关闭')
  })
writeStream.write('hello')
writeStream.write('world')
writeStream.end('')
#### 域名解析 dns.lookup()

#### 查询某个域名对应的ip
```javascript
var dns = require('dns');

dns.lookup('www.qq.com', function (err, address, family) {
  if (err) throw err;
  console.log('example: %j family: IPv%s', address, family);
});
```
输出如下：
```javascript
example: "58.60.9.21" family: IPv4
```
同一个域名，可能对应多个不同的ip, 可以设置获取一个域名对应的多个ip
```
var dns = require('dns');
var options = { all: true };

dns.lookup('www.qq.com', options, function (err, address, family) {
  if (err) throw err;
  console.log('example2: %j', address)
});
```
输出如下：
```javascript
example2: [{"address":"58.60.9.21","family":4},{"address":"59.37.96.63","family":4}]
```

#### resolve4

```javascript
var dns = require('dns');

dns.resolve4('www.qq.com', function (err, addresses, family) {
  if (err) throw err;

  console.log(`address: ${JSON.stringify(addresses)}`);

  addresses.forEach(function (a) {
    dns.reverse(a, function (err, hostnames) {
      if (err) throw err;
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    })
  })
})
```
输出如下
```
reverse for 59.37.96.63: ["www.qq.com"]
reverse for 58.60.9.21: ["www.qq.com"]
```
reverse可以根据ip查询出对一个的域名
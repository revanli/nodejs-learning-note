var dns = require('dns');
var options = { all: true };

dns.lookup('www.qq.com', function (err, address, family) {
  if (err) throw err;
  console.log('example: %j family: IPv%s', address, family);
});

dns.lookup('www.qq.com', options, function (err, address, family) {
  if (err) throw err;
  console.log('example2: %j', address)
});

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
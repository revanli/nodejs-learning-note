var net = require('net');

var PORT = 8989;
var HOST = '127.0.0.1';

var server = net.createServer(function (socket) {
  console.log('conneted: ' + socket.remoteAddress + ': ' + data);
  console.log('Data is:' + data);

  socket.on('data', function (data) {
    console.log('DATA ' + socket.remoteAddress + ': ' + data);
    console.log('Data is: ' + data);
    socket.write('Data from you is "' + data + '"');
  })

  socket.on('close', function () {
    console.log('CLOSED: ' + socket.remoteAddress + '' + socket.remotePort);
  })
})

server.listen(PORT, HOST);

console.log(server instanceof net.Server);

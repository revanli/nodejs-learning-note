var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var inp = fs.createReadStream('./assets/fileForCompress.txt');
var out = fs.createWriteStream('./assets/fileHasCompressed.txt.gz');
inp.pipe(gzip).pipe(out)

const http = require('http');
const fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

/* stesso risultato di "writable_stream" con meno codice */
myReadStream.pipe(myWriteStream);



